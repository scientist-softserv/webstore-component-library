/* eslint react/no-array-index-key: 0 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, Container } from 'react-bootstrap'

const Error = ({ errors, showBackButton, canDismissAlert, router }) => {
  const { errorTitle, errorText, variant } = errors
  const [show, setShow] = useState(true)

  return (
    show && (
      <Container>
        <Alert className='my-5 text-break' variant={variant} onClose={() => setShow(false)} dismissible={canDismissAlert}>
          {errorTitle && (
            <Alert.Heading>{errorTitle}</Alert.Heading>
          )}
          {errorText.map((errorMessage, index) => (
            <p key={index}>{errorMessage}</p>
          ))}
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
  )
}

Error.propTypes = {
  canDismissAlert: PropTypes.bool,
  errors: PropTypes.shape({
    errorText: PropTypes.arrayOf(PropTypes.string).isRequired,
    errorTitle: PropTypes.string,
    variant: PropTypes.string.isRequired,
  }).isRequired,
  showBackButton: PropTypes.bool,
  router: PropTypes.shape({}).isRequired,
}

Error.defaultProps = {
  canDismissAlert: false,
  showBackButton: true,
}

export default Error
