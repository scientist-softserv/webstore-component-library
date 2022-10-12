import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '..'

const Logo = ({ alt, logo }) => (
	<a href=''>
		<Image src={logo} alt={alt} width={240} />
	</a>
)

Logo.propTypes = {
	alt: PropTypes.string.isRequired,
	logo: PropTypes.string.isRequired
}

export default Logo
