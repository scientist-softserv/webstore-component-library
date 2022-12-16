import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/Image/Image'

const Logo = ({ alt, src, height }) => (
  <a href='/'>
    <Image src={src} alt={alt} height={height} />
  </a>
)

Logo.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
}

Logo.defaultProps = {
  alt: '',
  height: 50,
}

Logo.defaultProps = {
  alt: '',
}

export default Logo
