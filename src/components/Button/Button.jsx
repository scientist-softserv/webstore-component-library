import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

/**
 * Component for user interactions that don't include page routing
 */
const Button = ({ backgroundColor, size, label, textColor, ...props }) => (
  <button
    type='button'
    className={`button button--${size}`}
    style={{ backgroundColor, color: textColor }}
    {...props}
  >
    {label}
  </button>
)

Button.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  textColor: PropTypes.string,
}

Button.defaultProps = {
  backgroundColor: '#000000',
  size: 'medium',
  onClick: undefined,
  textColor: '#FFFFFF',
}

export default Button
