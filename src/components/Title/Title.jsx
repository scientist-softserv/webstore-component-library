import React from 'react'
import PropTypes from 'prop-types'
import './title.css'

const Title = ({ size, label, styles, ...props }) => (
	<p
		className={`title title--${size}`}
		style={{ ...styles }}
		{...props}
	>
		{label}
	</p>
)

Title.propTypes = {
	label: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	styles: PropTypes.shape({}),
}

Title.defaultProps = {
	size: 'large',
	styles: {},
}

export default Title
