import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Button from '../../components/Button/Button'
import './linked-button.css'

/**
 * Component for user interactions that include page routing
 */
// TODO(alishaevn):
//   - use this component in Item.jsx instead, but make sure it maintains its current styling
const LinkedButton = ({ buttonProps, addClass, path }) => (
  <Link href={path} passHref legacyBehavior>
    <ButtonLinkWrapper
      buttonProps={buttonProps}
      href={path}
      addClass={addClass}
    />
  </Link>
)

const ButtonLinkWrapper = React.forwardRef(({ buttonProps, href, addClass }, ref) => (
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
