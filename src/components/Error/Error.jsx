/* eslint react/no-array-index-key: 0 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, Container } from 'react-bootstrap'

const Error = ({ errorText, errorTitle, router, variant }) => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
        <Container>
          <Alert className='mt-5 text-break' variant={variant} onClose={() => setShow(false)}>
            {errorTitle && (
              <Alert.Heading>{errorTitle}</Alert.Heading>
            )}
            {errorText && (errorText)}
            <hr/>
            <div className="d-flex justify-content-end">
              <Button onClick={() => router.back()} variant={`outline-${variant}`}>
                Click to return to the previous page
              </Button>
            </div>
          </Alert>
        </Container>
    )
  }
}

Error.propTypes = {
  errorText: PropTypes.string.isRequired,
  errorTitle: PropTypes.string,
  variant: PropTypes.string.isRequired,
}

Error.defaultProps = {
  errorTitle: ''
}

export default Error
