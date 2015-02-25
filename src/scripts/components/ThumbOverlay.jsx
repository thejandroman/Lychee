class ThumbOverlay extends React.Component {

	parseTitle(title) {

		if (title===undefined||title.length===0)	title = 'Untitled'
		if (title.length>18)						title = title.substr(0, 18) + '...'

		return title

	}

	parseDate(timestamp) {

		// No additional validating required
		// Momentjs returns 'Invalid date' when timestamp is invalid
		return moment.unix(timestamp).format('MMMM YYYY')

	}

	render() {

		// Parse data
		var title	= this.parseTitle(this.props.title),
			date	= this.parseDate(this.props.sysstamp)

		return (
			<div className='overlay'>
				<h1 title={ this.props.title }>{ title }</h1>
				<a>{ date }</a>
			</div>
		)

	}

}