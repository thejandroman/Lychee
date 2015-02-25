class AlbumList extends React.Component {

	render() {

		var albumThumbs = []

		$.each(this.props.data, function(key, value) {
			albumThumbs.push(
				<AlbumThumb key={ value.id }
							id={ value.id }
							title={ value.title }
							sysstamp={ value.sysstamp }
							unsorted={ value.unsorted }
							star={ value.star }
							public={ value.public }
							recent={ value.recent }
							password={ value.password }
							thumbs={ [value.thumb0, value.thumb1, value.thumb2] } />
			)
		})

		return <div>{ albumThumbs }</div>

	}

}