import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Button from '../../components/Button/Button'
import './linked-button.css'

const InteriorButton = React.forwardRef(({ buttonProps, href, orientation }, ref) => (
  <a href={href} ref={ref} className={`linked-button-${orientation} linked-button`}>
    <Button {...buttonProps} />
  </a>
))

const LinkedButton = ({ buttonProps, path, orientation }) => (
  <Link href={path} passHref legacyBehavior>
    <InteriorButton
      buttonProps={buttonProps}
      href={path}
      orientation={orientation}
    />
  </Link>
)

LinkedButton.propTypes = {
  buttonProps: PropTypes.shape(Button.propTypes).isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  path: PropTypes.string.isRequired,
}

LinkedButton.defaultProps = {
  orientation: 'vertical',
}

export default LinkedButton
