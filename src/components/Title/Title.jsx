import React from 'react'
import PropTypes from 'prop-types'
import './title.css'

const Title = ({ size, label, styles, ...props }) => {

	return (
		<p
			className={`title title--${size}`}
			style={{ ...styles }}
			{...props}
		>
			{label}
		</p>
	)
}

Title.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	label: PropTypes.string.isRequired,
	styles: PropTypes.object,
}

Title.defaultProps = {
	size: 'large',
	label: 'This is a title.'
}

export default Title
