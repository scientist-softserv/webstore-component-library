import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary, backgroundColor, size, label, addClass, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return (
    <button
      type='button'
      className={`storybook-button storybook-button--${size} ${mode} ${addClass}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  /**
	 * Is this the principal call to action on the page?
	 */
  primary: PropTypes.bool,
  /**
	 * What background color to use
	 */
  backgroundColor: PropTypes.string,
  /**
	 * How large should the button be?
	 */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
	 * Button contents
	 */
  label: PropTypes.string.isRequired,
  /**
	 * Optional click handler
	 */
  onClick: PropTypes.func,
  addClass: PropTypes.string,
}

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  addClass: '',
}

export default Button
