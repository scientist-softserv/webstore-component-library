import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '../../components'
import './about-us.css'

const AboutUs = ({ companyDescription }) => (
	<section className='about-us'>
		<Title size='medium' label='About Us' />
		<div>
			{companyDescription}
		</div>
	</section>
)

AboutUs.propTypes = {
	companyDescription: PropTypes.string.isRequired,
}

export default AboutUs
