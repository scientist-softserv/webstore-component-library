/* eslint react/no-array-index-key: 0 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, Container } from 'react-bootstrap'

const Notice = ({ alert, buttonProps, dismissible, withBackButton }) => {
  const [show, setShow] = useState(true)
  const { title, body, variant } = alert
  let onClick, text
  if (withBackButton) ({ onClick, text } = buttonProps)

  return (
    show && (
      <Container>
        <Alert className='my-5 text-break' variant={variant} onClose={() => setShow(false)} dismissible={dismissible}>
          {title && (
            <Alert.Heading>{title}</Alert.Heading>
          )}
          {body.map((text, index) => (
            <p className='mb-0' key={index}>{text}</p>
          ))}
          {withBackButton && (
            <>
              <hr />
              <div className='d-flex justify-content-end'>
                {/* <Button onClick={() => router.back()} variant={`outline-${variant}`}>
                  Click to return to the previous page.
                </Button> */}
                <Button onClick={onClick} variant={`outline-${variant}`}>
                  {text}
                </Button>
              </div>
            </>
          )}
        </Alert>
      </Container>
    )
  )
}

Notice.propTypes = {
  alert: PropTypes.shape({
    body: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string,
    variant: PropTypes.string.isRequired,
  }).isRequired,
  buttonProps: PropTypes.shape({
    onClick: PropTypes.func,
    text: PropTypes.string,
  }),
  dismissible: PropTypes.bool,
  withBackButton: PropTypes.bool,
}

Notice.defaultProps = {
  buttonProps: {
    text: 'Click to return to the previous page.'
  },
  dismissible: true,
  withBackButton: false,
}

export default Notice
