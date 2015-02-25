class AlbumsApp extends React.Component {

	constructor(props) {

		super(props)
		this.state = {
			smartalbums: {},
			albums: {},
			data: {}
		}

	}

	update(id, key, value) {

		var newState = React.addons.update(this.state, {
			albums: {[id]: {[key]: {$set: value}}}
		})

		this.setState(newState)

	}

	componentDidMount() {

		var startTime,
			durationTime,
			waitTime,
			that = this;

		// lychee.animate('.album, .photo', 'contentZoomOut');
		// lychee.animate('.divider', 'fadeOut');

		startTime = new Date().getTime();

		api.post('Album::getAll', {}, function(data) {

			/* Smart Albums */
			data.unsortedAlbum = {
				id:			0,
				title:		'Unsorted',
				sysdate:	data.unsortedNum + ' photos',
				unsorted: 	true,
				thumb0:		data.unsortedThumb0,
				thumb1:		data.unsortedThumb1,
				thumb2:		data.unsortedThumb2
			};

			data.starredAlbum = {
				id:			'f',
				title:		'Starred',
				sysdate:	data.starredNum + ' photos',
				star:		true,
				thumb0:		data.starredThumb0,
				thumb1:		data.starredThumb1,
				thumb2:		data.starredThumb2
			};

			data.publicAlbum = {
				id:			's',
				title:		'Public',
				sysdate:	data.publicNum + ' photos',
				public:		true,
				thumb0:		data.publicThumb0,
				thumb1:		data.publicThumb1,
				thumb2:		data.publicThumb2
			};

			data.recentAlbum = {
				id:			'r',
				title:		'Recent',
				sysdate:	data.recentNum + ' photos',
				recent:		true,
				thumb0:		data.recentThumb0,
				thumb1:		data.recentThumb1,
				thumb2:		data.recentThumb2
			};

			albums.json = data;

			data.smartalbums = {
				[data.unsortedAlbum.id]: data.unsortedAlbum,
				[data.starredAlbum.id]: data.starredAlbum,
				[data.publicAlbum.id]: data.publicAlbum,
				[data.recentAlbum.id]: data.recentAlbum
			}

			// Calculate delay
			durationTime = (new Date().getTime() - startTime);
			if (durationTime>300)	waitTime = 0;
			else					waitTime = 300 - durationTime;

			// Skip delay when opening a blank Lychee
			if (!visible.albums()&&!visible.photo()&&!visible.album())	waitTime = 0;
			if (visible.album()&&lychee.content.html()==='')			waitTime = 0;

			setTimeout(function() {
				header.setMode('albums');
				// console.log(data);
				// view.albums.init();
				console.log({
					smartalbums: data.smartalbums,
					albums: data.content,
					data: data
				})
				that.setState({
					smartalbums: data.smartalbums,
					albums: data.content,
					data: data
				});
				// lychee.animate('.album, .photo', 'contentZoomIn');
			}, waitTime);
		});

	}

	setTitle(id, title) {

		this.update(id, 'title', title)

	}

	render() {

		return (
			<div>
				<Divider title="Smart Albums" />
				<AlbumList data={ this.state.smartalbums } />
				<Divider title="Albums" />
				<AlbumList data={ this.state.albums } />
			</div>
		)

	}

}