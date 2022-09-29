import React from 'react'
import PropTypes from 'prop-types'
import { FeaturedService, Title } from '../../components'
import './featured-services.css'

const FeaturedServices = ({ services }) => (
	<section className='featured-services'>
		<Title size='medium' title='Featured Services' />
		<div className='services-wrapper'>
			{services.map((service) => <FeaturedService key={service.id} {...service} />)}
		</div>
	</section>
)

FeaturedServices.propTypes = {
	services: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string.isRequired,
		imgProps: PropTypes.shape({}).isRequired,
		name: PropTypes.string.isRequired,
		styles: PropTypes.shape({}),
	})).isRequired,
}

export default FeaturedServices
