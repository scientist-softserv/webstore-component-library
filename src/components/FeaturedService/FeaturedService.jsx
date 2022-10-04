import React from 'react'
import PropTypes from 'prop-types'
import './featured-service.css'

const FeaturedService = ({ description, img, imgProps, name, style }) => {
	const { alt, src } = img

	return (
		<div
			className='featured-service-wrapper'
			style={{ ...style }}
		>
			<img className='featured-service-image' src={src} alt={alt} {...imgProps} />
			<div className='featured-service'>
				<h3 className='featured-service-name'>
					{name}
				</h3>
				<p className='featured-service-description'>
					{description}
				</p>
			</div>
		</div>
	)
}

FeaturedService.propTypes = {
	description: PropTypes.string.isRequired,
	img: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
	}).isRequired,
	imgProps: PropTypes.shape({}),
	name: PropTypes.string.isRequired,
	style: PropTypes.shape({}),
}

FeaturedService.defaultProps = {
	style: {},
}

export default FeaturedService
