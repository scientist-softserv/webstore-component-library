import React from 'react'
import PropTypes from 'prop-types'
import './title.css'

const Title = ({ addClass, alignment, size, style, title }) => (
  <div className={`title--${alignment} ${addClass || ''}`}>
    <h1
      className={`title title--${size}`}
      style={{ ...style }}
    >
      {title}
    </h1>
  </div>
)

Title.propTypes = {
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
}

Title.defaultProps = {
  alignment: 'left',
  size: 'large',
  style: {},
}

export default Title
