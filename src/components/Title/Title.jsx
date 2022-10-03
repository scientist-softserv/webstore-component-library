import React from 'react'
import PropTypes from 'prop-types'
import './title.css'

const Title = ({ alignment, size, styles, title }) => (
	<div className={`title--${alignment}`}>
		<p
			className={`title title--${size}`}
			style={{ ...styles }}
		>
			{title}
		</p>
	</div>
)

Title.propTypes = {
	alignment: PropTypes.oneOf(['left', 'center', 'right']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	styles: PropTypes.shape({}),
	title: PropTypes.string.isRequired,
}

Title.defaultProps = {
	alignment: 'left',
	size: 'large',
	styles: {},
}

export default Title
