<?php

###
# @name			Video Module
###

if (!defined('LYCHEE')) exit('Error: Direct access is not allowed!');

class Video extends Module {

	private $database	= null;
	private $settings	= null;
	private $videoIDs	= null;

	public static $allowedMimeTypes = array(
		'video/mp4' => '.mp4',
		'video/ogg' => '.ogv',
		'video/webm' => '.webm',
		'video/x-flv' => '.flv',
	);

	protected static $finfo_mime = false;

	public static function getMimeType($path) {
		# create finfo resource if it doesn't exist
		if ( ! self::$finfo_mime ) {
			self::$finfo_mime = finfo_open(FILEINFO_MIME_TYPE);
		}

		if ( is_array($path) && isset($path['name']) ) {
			$path = $path['name'];
		}

		# get mime type
		$mime_type = finfo_file( self::$finfo_mime, $path );

		# check if allowed
		if ( ! isset(self::$allowedMimeTypes[$mime_type]) ) {
			return false;
		}

		return $mime_type;
	}

	public function __construct($database, $plugins, $settings, $videoIDs) {

		# Init vars
		$this->database	= $database;
		$this->plugins	= $plugins;
		$this->settings	= $settings;
		$this->videoIDs	= $videoIDs;

		return true;

	}

	public function add($files, $albumID, $description = '', $tags = '') {

		# Check dependencies
		self::dependencies( isset( $this->database ) );

		# Check permissions
		if ( hasPermissions( LYCHEE_UPLOADS ) === false ||
		     hasPermissions( LYCHEE_UPLOADS_BIG ) === false ||
		     hasPermissions( LYCHEE_UPLOADS_THUMB ) === false
		) {
			Log::error( $this->database,
				__METHOD__,
				__LINE__,
				'An upload-folder is missing or not readable and writable' );
			exit( 'Error: An upload-folder is missing or not readable and writable!' );
		}

		# Call plugins
		$this->plugins( __METHOD__, 0, func_get_args() );

		switch ( $albumID ) {

			case 's':
				# s for public (share)
				$public  = 1;
				$star    = 0;
				$albumID = 0;
				break;

			case 'f':
				# f for starred (fav)
				$star    = 1;
				$public  = 0;
				$albumID = 0;
				break;

			case 'r':
				# r for recent
				$public  = 0;
				$star    = 0;
				$albumID = 0;
				break;

			default:
				$star   = 0;
				$public = 0;
				break;

		}

		foreach ( $files as $file ) {

			# Verify file and set extension
			$mime_type = Video::getMimeType($file);
			if ( $mime_type === false ) {
				Log::error($this->database, __METHOD__, __LINE__, 'Video format not supported');
				exit('Error: Video format not supported!');
			}
			$extension = self::$allowedMimeTypes[$mime_type];

			# Generate id
			$id = str_replace('.', '', microtime(true));
			while(strlen($id)<14) $id .= 0;

			# Set paths
			$tmp_name	= $file['tmp_name'];
			$video_name	= md5($id) . $extension;
			$path		= LYCHEE_UPLOADS_VIDEO . $video_name;

			# Create checksum based on $mime_type and $tmp_name
			$checksum = sha1_file($tmp_name);
			if ($checksum===false) {
				Log::error($this->database, __METHOD__, __LINE__, 'Could not calculate checksum for video');
				exit('Error: Could not calculate checksum for video!');
			}

			$exists = $this->exists($checksum);

			if ($exists!==false) {
				$video_name	= $exists['video_name'];
				$path		= $exists['path'];
				$exists		= true;
			}

			if ($exists===false) {

				# Import if not uploaded via web
				if (!is_uploaded_file($tmp_name)) {
					if (!@rename($tmp_name, $path)) {
						Log::error($this->database, __METHOD__, __LINE__, 'Could not move video to uploads');
						exit('Error: Could not move video to uploads!');
					}
				} else {
					if (!@move_uploaded_file($tmp_name, $path)) {
						Log::error($this->database, __METHOD__, __LINE__, 'Could not move video to uploads');
						exit('Error: Could not move video to uploads!');
					}
				}
			}

			$info = array();
                        #Read file info
                        $info = $this->getInfo($path);
                        $info['type'] = $mime_type;

			# Use title of file
			$info['title'] = substr(basename($file['name'], $extension), 0, 30);
			# Size
			$size = filesize($path)/1024;
			if ($size>=1024) $info['size'] = round($size/1024, 1) . ' MB';
			else $info['size'] = round($size, 1) . ' KB';

                        #Create thumb
                        if(!$this->createThumb($path,$video_name, $info['type'], $info['width'], $info['height'])){
                          #Log something if this fails
                        }

			# Save to DB
			$values	= array(LYCHEE_TABLE_PHOTOS, $id, $info['title'], $video_name, $description, $tags, $mime_type, $info['width'], $info['height'], $info['size'], '', '', '', '', '', '', '', '', $albumID, $public, $star, $checksum, '', 'video');
			$query	= Database::prepare($this->database, "INSERT INTO ? (id, title, url, description, tags, type, width, height, size, iso, aperture, make, model, shutter, focal, takestamp, thumbUrl, album, public, star, checksum, medium, media_type) VALUES ('?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?')", $values);
			$result = $this->database->query($query);

			if (!$result) {
				Log::error($this->database, __METHOD__, __LINE__, $this->database->error);
				exit('Error: Could not save video in database!');
			}

		}

		# Call plugins
		$this->plugins(__METHOD__, 1, func_get_args());

		return true;
	}

	protected function exists($checksum, $videoID = null) {

		# Check dependencies
		self::dependencies(isset($this->database, $checksum));

		# Exclude $videoID from select when $videoID is set
		if (!is_null($videoID)) $query = Database::prepare($this->database, "SELECT id, url FROM ? WHERE checksum = '?' AND id <> '?' LIMIT 1", array(LYCHEE_TABLE_PHOTOS, $checksum, $videoID));
		else $query = Database::prepare($this->database, "SELECT id, url FROM ? WHERE checksum = '?' LIMIT 1", array(LYCHEE_TABLE_PHOTOS, $checksum));

		$result	= $this->database->query($query);

		if (!$result) {
			Log::error($this->database, __METHOD__, __LINE__, 'Could not check for existing videos with the same checksum');
			return false;
		}

		if ($result->num_rows===1) {

			$result = $result->fetch_object();

			$return = array(
				'video_name'	=> $result->url,
				'path'			=> LYCHEE_UPLOADS_VIDEO . $result->url,
			);

			return $return;

		}

		return false;

	}

        private function createThumb($url, $filename, $type, $width, $height){
            # Function that uses avconv to generate a thumbnail for a video file
            # Expects the following:
            # (string) $url : the path to the original video file
            # (string) $filename : the filename without path
            # (string) $type : dunno why this is needed right now, only mp4 is supported
            # (int) $width
            # (int) $height
            # Returns the following:
            # (bool) $return : true on success, false otherwise

            # Check dependencies
            self::dependencies(isset($this->database, $url, $filename, $this->settings, $type, $width, $height));

            # Call Plugins
            $this->plugins(__METHOD__, 0, func_get_args());

            #First step is to take a frame from the video which will then be resized
            $videoName = explode( '.', $filename);
            $thumbOriginal = $videoName[0].".jpg";

            $command = "avconv  -itsoffset -4  -i ".$url." -vcodec mjpeg -vframes 1 -an -f rawvideo -s ".$width."x".$height." ". LYCHEE_UPLOADS_THUMB . $thumbOriginal;
            Log::notice($this->database,__METHOD__,__LINE__, "Command: " . $command);
            exec( $command );

            # Next create the actual thumbnails using the same code as used for photos
            # Size of the thumbnail
            $newWidth       = 200;
            $newHeight      = 200;

            $videoName      = explode('.', $filename);
            $newUrl         = LYCHEE_UPLOADS_THUMB . $videoName[0] . '.jpeg';
            $newUrl2x       = LYCHEE_UPLOADS_THUMB . $videoName[0] . '@2x.jpeg'; 

            # Create thumbnails with Imagick
            if(extension_loaded('imagick')&&$this->settings['imagick']==='1') {

                    # Read image
                    $thumb = new Imagick();
                    $thumb->readImage($thumbOriginal);
                    $thumb->setImageCompressionQuality($this->settings['thumbQuality']);
                    $thumb->setImageFormat('jpeg');

                    # Copy image for 2nd thumb version
                    $thumb2x = clone $thumb;

                    # Create 1st version
                    $thumb->cropThumbnailImage($newWidth, $newHeight);
                    $thumb->writeImage($newUrl);
                    $thumb->clear();
                    $thumb->destroy();

                    # Create 2nd version
                    $thumb2x->cropThumbnailImage($newWidth*2, $newHeight*2);
                    $thumb2x->writeImage($newUrl2x);
                    $thumb2x->clear();
                    $thumb2x->destroy();
             }



            return false;
        }

        private function getInfo($url){
            # Function uses avconv to get resolution and possible other infos about a video file
            # Expects the following:
            # (string) $url = Path to video file
            # Returns the following:
            # (array) $return containing these keys:
            # (int) width
            # (int) height

            # Check dependencies
            self::dependencies(isset($this->database, $url));

            # Call plugins
            $this->plugins(__METHOD__, 0 , func_get_args());

            #Run a avconv (previously ffmpeg) command to get stats
            $command = "avconv -i " . $url . " -vstats 2>&1";
            $output = shell_exec( $command );

            $regex_sizes = "/Video: ([^,]*), ([^,]*), ([0-9]{1,4})x([0-9]{1,4})/";
            if (preg_match($regex_sizes, $output, $regs)) {
                $codec = $regs [1] ? $regs [1] : null;
                $width = $regs [3] ? $regs [3] : null;
                $height = $regs [4] ? $regs [4] : null;
            }
            #Create the return stuff
            $result = array();
            $result['width'] = $width;
            $result['height'] = $height;

            # Call plugins
            $this->plugins(__METHOD__, 1, func_get_args());

            return $result;

        }

}
