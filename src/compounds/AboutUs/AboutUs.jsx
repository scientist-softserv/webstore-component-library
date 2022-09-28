import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '../../components'
import './about-us.css'

const AboutUs = ({ company_description }) => (
	<section className='about-us'>
		<Title size='medium' label='About Us' />
		<div>
			{company_description}
		</div>
	</section>
)

AboutUs.propTypes = {
		company_description: PropTypes.string.isRequired,
}

AboutUs.defaultProps = {
	company_description: 'Some nice words to say who we are and why you should work with us. Some nice words to say who we are and why you should work with us. Some nice words to say who we are and why you should work with us. Some nice words to say who we are and why you should work with us. Some nice words to say who we are and why you should work with us. Some nice words to say who we are and why you should work with us.',
}

export default AboutUs
