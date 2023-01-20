/* eslint react/no-array-index-key: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, Container } from 'react-bootstrap'

const Error = ({ errors, showBackButton, router }) => {
  const { errorTitle, errorText, variant} = errors
  return (
    <Container>
      <Alert className='my-5 text-break' variant={variant}>
        {errorTitle && (
          <Alert.Heading>{errorTitle}</Alert.Heading>
        )}
        {errorText && (errorText)}
        {showBackButton && (
          <>
            <hr />
            <div className='d-flex justify-content-end'>
              <Button onClick={() => router.back()} variant={`outline-${variant}`}>
                Click to return to the previous page.
              </Button>
            </div>
          </>
        )}
      </Alert>
    </Container>
  )
}

Error.propTypes = {
  errorText: PropTypes.string.isRequired,
  errorTitle: PropTypes.string,
  router: PropTypes.shape({}).isRequired,
  showBackButton: PropTypes.bool,
  variant: PropTypes.string.isRequired,
}

Error.defaultProps = {
  errorTitle: '',
  showBackButton: true,
}

export default Error
