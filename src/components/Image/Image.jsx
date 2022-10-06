import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ alt, height, src, width, ...props}) => (
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
	height: PropTypes.number,
	src: PropTypes.string.isRequired,
	width: PropTypes.number,
}

Image.defaultProps = {
	height: 0,
	width: 0,
}

export default Image
