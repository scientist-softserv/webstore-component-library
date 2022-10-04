import React from 'react'
import PropTypes from 'prop-types'
import { FeaturedService, Title } from '../../components'
import './featured-services.css'

const FeaturedServices = ({ group_by, services }) => {

	return (
		<section className='featured-services'>
			<Title size='medium' title='Featured Services' />
			<div className={`services-wrapper--${group_by}`}>
				{services.map((service) => <FeaturedService key={service.id} {...service} />)}
			</div>
		</section>
	)
}

FeaturedServices.propTypes = {
	group_by: PropTypes.oneOf([3, 4]),
	services: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string.isRequired,
		img: PropTypes.shape({}).isRequired,
		imgProps: PropTypes.shape({}),
		name: PropTypes.string.isRequired,
		style: PropTypes.shape({}),
	})).isRequired,
}

FeaturedServices.defaultProps = {
	group_by: 3,
}

export default FeaturedServices
