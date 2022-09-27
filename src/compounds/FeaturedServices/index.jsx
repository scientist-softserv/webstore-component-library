import React from 'react'
import PropTypes from 'prop-types'
import { FeaturedService, Title } from '../../components'
import featuredService from '../../assets/featured-service.jpg'
import './index.css'

const FeaturedServices = ({ services }) => (
	<section>
		{/* <Title /> */}
		<div>
			{services.map((service) => <FeaturedService { ...service } />)}
		</div>
	</section>
)

FeaturedServices.propTypes = {
	services: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string.isRequired,
		imgProps: PropTypes.object.isRequired,
		name: PropTypes.string.isRequired,
		styles: PropTypes.object,
	}))
}

FeaturedServices.defaultProps = {
	services: [
		{
			description: 'This is the the first service.',
			imgProps: {
				src: featuredService,
				altText: 'Several rows of test tubes with a liquid being put into one.'
			},
			name: 'Service One'
		},
		{
			description: 'This is the the second service.',
			imgProps: {
				src: featuredService,
				altText: 'Several rows of test tubes with a liquid being put into one.'
			},
			name: 'Service Two'
		},
		{
			description: 'This is the the third service.',
			imgProps: {
				src: featuredService,
				altText: 'Several rows of test tubes with a liquid being put into one.'
			},
			name: 'Service Three'
		},

	],
}

export default FeaturedServices
