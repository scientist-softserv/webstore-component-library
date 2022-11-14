import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/Image/Image'

const Logo = ({ alt, src }) => (
  <a href='/'>
    <Image src={src} alt={alt} height={50} />
  </a>
)

Logo.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Logo
