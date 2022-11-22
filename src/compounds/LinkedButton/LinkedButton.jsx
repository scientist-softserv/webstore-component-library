import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Button from '../../components/Button/Button'
import './linked-button.css'

/**
 * Component for user interactions that include page routing
 */
// TODO(alishaevn):
//   - remove default right alignment
//   - use this component in Item.jsx instead, but make sure it maintains its current styling
const LinkedButton = ({ buttonProps, orientation, path }) => (
  <Link href={path} passHref legacyBehavior>
    <InteriorButton
      buttonProps={buttonProps}
      href={path}
      orientation={orientation}
    />
  </Link>
)

const InteriorButton = React.forwardRef(({ buttonProps, href, orientation }, ref) => (
  <a href={href} ref={ref} className={`linked-button-${orientation} linked-button`}>
    <Button {...buttonProps} />
  </a>
))

const { onClick, ...remainingPropTypes } = Button.propTypes
LinkedButton.propTypes = {
  buttonProps: PropTypes.shape(remainingPropTypes).isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  path: PropTypes.string.isRequired,
}

LinkedButton.defaultProps = {
  orientation: 'vertical',
}

export default LinkedButton
