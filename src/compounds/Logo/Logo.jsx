import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/Image/Image'

const Logo = ({ alt, img }) => (
	<a href='/'>
		<Image src={img} alt={alt} maxWidth={240} maxHeight={70} />
	</a>
)

Logo.propTypes = {
	alt: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired
}

export default Logo
