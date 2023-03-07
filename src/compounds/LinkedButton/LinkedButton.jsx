import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Button, { buttonPropTypes } from '../../components/Button/Button'
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
    />
  </Link>
)

const ButtonLinkWrapper = React.forwardRef(({ ...props }, ref) => {
  // eslint-disable-next-line react/prop-types
  const { addClass, buttonProps, href } = props

  return (
    <a href={href} ref={ref} className={addClass} data-cy='linked-button'>
      <Button {...buttonProps} />
    </a>
  )
})

const { onClick, ...remainingPropTypes } = buttonPropTypes

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
}

ButtonLinkWrapper.defaultProps = {
  addClass: '',
}

ButtonLinkWrapper.displayName = 'Button Link Wrapper'

export default LinkedButton
