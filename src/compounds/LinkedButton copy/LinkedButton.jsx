import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './linked-button.css'

/**
 * Component for user interactions that include page routing
 */
// TODO(alishaevn):
//   - use this component in Item.jsx instead, but make sure it maintains its current styling
const LinkedButton = ({ addClass, buttonProps, path }) => (
  <Link href={path} passHref legacyBehavior>
    <ButtonLinkWrapper
      addClass={addClass}
      buttonProps={buttonProps}
      href={path}
    />
  </Link>
)

const ButtonLinkWrapper = React.forwardRef(({ addClass, buttonProps, href }, ref) => (
  <a href={href} ref={ref} className={addClass}>
    <Button {...buttonProps} />
  </a>
))

const { onClick, ...remainingPropTypes } = Button.propTypes
LinkedButton.propTypes = {
  buttonProps: PropTypes.shape(remainingPropTypes).isRequired,
  addClass: PropTypes.string,
  path: PropTypes.string.isRequired,
}

LinkedButton.defaultProps = {
  addClass: '',
}

export default LinkedButton
