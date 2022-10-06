import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ alt, height, src, width, ...props }) => (
	<img
		alt={alt}
		src={src}
		height={height || 'auto'}
		width={width || 'auto'}
		{...props}
	/>
)

Image.propTypes = {
	alt: PropTypes.string.isRequired,
	height: PropTypes.oneOfType([
		PropTypes.string, // allows percentages
		PropTypes.number, // uses pixels
	]),
	src: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string, // allows percentages
		PropTypes.number, // uses pixels
	]),
}

Image.defaultProps = {
	height: 0,
	width: 0,
}

export default Image
