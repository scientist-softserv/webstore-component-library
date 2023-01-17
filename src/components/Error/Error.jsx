/* eslint react/no-array-index-key: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap'

const Error = ({ errorText, variant }) => (
  <Alert variant={variant} text={errorText}></Alert>
)

Error.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default Error
