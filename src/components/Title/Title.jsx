import React from 'react'
import PropTypes from 'prop-types'
import './title.css'

const Title = ({ alignment, size, style, title }) => (
  <div className={`title--${alignment} margin-bottom`}>
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
