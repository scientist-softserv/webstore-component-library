import React from 'react'
import PropTypes from 'prop-types'
import './featured-service.css'

const FeaturedService = ({ description, img, imgProps, name, styles }) => {
	const { alt, src } = img

	return (
		<div
			className='featured-service-wrapper'
			styles={styles}
		>
			<img className='featured-service-image' src={src} alt={alt} {...imgProps} />
			<div className='featured-service'>
				<p className='featured-service-name'>{name}</p>
				<p className='featured-service-description'>{description}</p>
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
	styles: PropTypes.shape({}),
}

FeaturedService.defaultProps = {
	styles: {},
}

export default FeaturedService
