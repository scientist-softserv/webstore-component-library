import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

/**
 * Component for user interactions that don't include page routing
 */
const Button = ({ addClass, backgroundColor, size, label, textColor, type, ...props }) => (
  <button
    type={type || 'button'}
    className={`button button--${size} ${addClass}`}
    style={{ backgroundColor, color: textColor }}
    {...props}
  >
    {label}
  </button>
)

export const buttonPropTypes = {
  addClass: PropTypes.string,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  textColor: PropTypes.string,
  type: PropTypes.string,
}

Button.propTypes =  { ...buttonPropTypes }

Button.defaultProps = {
  addClass: '',
  backgroundColor: '#000000',
  size: 'medium',
  onClick: undefined,
  textColor: '#FFFFFF',
  type: '',
}

export default Button
