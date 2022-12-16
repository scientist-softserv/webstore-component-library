import React from 'react'
import PropTypes from 'prop-types'
import './badge.css'

const Badge = ({ addClass, backgroundColor, text, textColor }) => (
  <div style={{ backgroundColor }} className={`webstore-badge ${addClass}`}>
    <span style={{ color: textColor }}>
      {text}
    </span>
  </div>
)

Badge.propTypes = {
  addClass: PropTypes.string,
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
}

Badge.defaultProps = {
  addClass: '',
  backgroundColor: '#A9A9A9',
  textColor: '#000000',
}

export default Badge
