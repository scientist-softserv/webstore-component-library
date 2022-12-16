import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ addClass, alt, height, src, width, ...props }) => (
  <img
    alt={alt}
    src={src}
    height={height || 'auto'}
    width={width || 'auto'}
    className={`${addClass}`}
    {...props}
  />
)

Image.propTypes = {
  addClass: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string, // allows percentages
    PropTypes.number, // uses pixels
  ]),
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string, // allows percentages
    PropTypes.number, // uses pixels
  ]),
}

Image.defaultProps = {
  alt: '',
  addClass: '',
  height: 'auto',
  width: 'auto',
}

export default Image
