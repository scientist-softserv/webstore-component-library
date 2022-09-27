import React from 'react'
import PropTypes from 'prop-types'
import featuredService from '../../assets/featured-service.jpg'
import './index.css'

const FeaturedService = ({ description, imgProps, name, styles }) => {

	return (
		<div
			className='featured-service-wrapper'
			styles={{ styles }}
		>
			<img className='featured-service-image' { ...imgProps } />
			<div className='featured-service'>
				<p className='featured-service-name'>{name}</p>
				<p className='featured-service-description'>{description}</p>
			</div>
		</div>
	)
}

FeaturedService.propTypes = {
	description: PropTypes.string.isRequired,
	imgProps: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	styles: PropTypes.object,
}

FeaturedService.defaultProps = {
	description: 'This is the description of this product or service.',
	imgProps: {
		src: featuredService,
		altText: 'Several rows of test tubes with a liquid being put into one.'
	},
	name: 'Product/Service',
	styles: {},
}

export default FeaturedService
