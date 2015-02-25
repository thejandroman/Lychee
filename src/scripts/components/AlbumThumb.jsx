class AlbumThumb extends React.Component {

	parseThumbs(thumbs) {

		var passwordThumb = 'src/images/password.svg',
			noImagesThumb = 'src/images/no_images.svg'

		if (album.password&&lychee.publicMode) {
			thumbs[0] = passwordThumb
			thumbs[1] = passwordThumb
			thumbs[2] = passwordThumb
		} else {
			if (!thumbs[0]) thumbs[0] = noImagesThumb
			if (!thumbs[1]) thumbs[1] = noImagesThumb
			if (!thumbs[2]) thumbs[2] = noImagesThumb
		}

		return thumbs

	}

	generateClasses() {

		var cx		= React.addons.classSet,
			classes	= {}

		classes.unsorted = cx({
			'badge': true,
			'badge--show': this.props.unsorted,
			'icn-unsorted': true
		})

		classes.star = cx({
			'badge': true,
			'badge--show': this.props.star,
			'icn-star': true
		})

		classes.public = cx({
			'badge': true,
			'badge--show': this.props.public,
			'icn-public': true
		})

		classes.recent = cx({
			'badge': true,
			'badge--show': this.props.recent,
			'icn-recent': true
		})

		classes.password = cx({
			'badge': true,
			'badge--show': this.props.password,
			'icn-password': true
		})

		return classes

	}

	handleClick(albumID) {

		lychee.goto(albumID)

	}

	handleContextMenu(albumID, e) {

		contextMenu.album(albumID, e)

	}

	render() {

		var thumbs	= this.parseThumbs(this.props.thumbs),
			classes	= this.generateClasses()

		return (
			<div className='album contentZoomIn'
				 data-id={ this.props.id }
				 data-password={ this.props.password }
				 onClick={ this.handleClick.bind(this, this.props.id) }
				 onContextMenu={ this.handleContextMenu.bind(this, this.props.id) } >

					<img src={ thumbs[2] } width='200' height='200' alt='thumb' data-type='nonretina' />
					<img src={ thumbs[1] } width='200' height='200' alt='thumb' data-type='nonretina' />
					<img src={ thumbs[0] } width='200' height='200' alt='thumb' data-type={ this.props.type } />

					<ThumbOverlay title={ this.props.title } sysstamp={ this.props.sysstamp } />

					<a className={ classes.star } dangerouslySetInnerHTML={{__html: build.iconic('star')}}></a>
					<a className={ classes.public } dangerouslySetInnerHTML={{__html: build.iconic('eye')}}></a>
					<a className={ classes.unsorted } dangerouslySetInnerHTML={{__html: build.iconic('list')}}></a>
					<a className={ classes.recent } dangerouslySetInnerHTML={{__html: build.iconic('clock')}}></a>
					<a className={ classes.password } dangerouslySetInnerHTML={{__html: build.iconic('lock-locked')}}></a>

			</div>
		)

	}

}