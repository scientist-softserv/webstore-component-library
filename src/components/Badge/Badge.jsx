import React from 'react'
import PropTypes from 'prop-types'
import './badge.css'

const Badge = ({ backgroundColor, text, textColor }) => (
  <div style={{ backgroundColor }} className='badge'>
    <p style={{ color: textColor }}>
      {text}
    </p>
  </div>
)

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
}

Badge.defaultProps = {
  backgroundColor: '#A9A9A9',
  textColor: '#000000',
}

export default Badge
