import React from 'react'
import PropTypes from 'prop-types'
import './title.css'

const Title = ({ size, title, styles, ...props }) => (
	<p
		className={`title title--${size}`}
		style={{ ...styles }}
		{...props}
	>
		{title}
	</p>
)

Title.propTypes = {
	title: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	styles: PropTypes.shape({}),
}

Title.defaultProps = {
	size: 'large',
	styles: {},
}

export default Title
