import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import './linked-button.css'

/**
 * Component for user interactions that include page routing
 */
// TODO(alishaevn):
//   - use this component in Item.jsx instead, but make sure it maintains its current styling

// we are not using the "as" prop in the Link because it removes the ability to access the path query
const LinkedButton = ({ addClass, buttonProps, path }) => (
  <Link href={path} passHref>
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
  path: PropTypes.exact({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.shape({ id: PropTypes.number }),
  }).isRequired,
}

LinkedButton.defaultProps = {
  addClass: '',
}

ButtonLinkWrapper.propTypes = {
  addClass: PropTypes.string,
  buttonProps: PropTypes.shape(remainingPropTypes).isRequired,
  href: PropTypes.string.isRequired,
}

ButtonLinkWrapper.defaultProps = {
  addClass: '',
}

ButtonLinkWrapper.displayName = 'Button Link Wrapper'

export default LinkedButton
