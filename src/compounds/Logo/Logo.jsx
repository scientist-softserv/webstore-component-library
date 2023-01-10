import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/Image/Image'

const Logo = ({ addClass, alt, src, height }) => (
  <a href='/'>
    <Image src={src} alt={alt} height={height} addClass={addClass} />
  </a>
)

Logo.propTypes = {
  addClass: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
}

Logo.defaultProps = {
  addClass: '',
  alt: '',
  height: 50,
}

export default Logo
