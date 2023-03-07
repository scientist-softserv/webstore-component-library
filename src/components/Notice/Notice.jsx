/* eslint react/no-array-index-key: 0 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, Container } from 'react-bootstrap'

const Notice = ({ addClass, alert, buttonProps, dismissible, withBackButton }) => {
  const [show, setShow] = useState(true)
  const { title, body, variant, onClose } = alert
  let onClick
  let text
  if (withBackButton) ({ onClick, text } = buttonProps)

  return (
    show && (
      <Container className={addClass}>
        <Alert
          className='text-break'
          variant={variant}
          onClose={onClose || (() => setShow(false))}
          dismissible={dismissible}
        >
          {title && (
            <Alert.Heading>{title}</Alert.Heading>
          )}
          {body.map((message, index) => {
            // If "message" is a JSON string, return it as a formatted code block
            // Otherwise, return it as a regular string
            const isJSONParsable = () => {
              try {
                JSON.parse(message)
                return true
              } catch (error) {
                return false
              }
            }
            const isJavascriptObject = isJSONParsable(message)

            return (
              isJavascriptObject ? (
                <pre className='mb-0' key={index}>{message}</pre>
              ) : (
                <p className='mb-0' key={index}>{message}</p>
              )
            )
          })}
          {withBackButton && (
            <>
              <hr />
              <div className='d-flex justify-content-end'>
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
  addClass: PropTypes.string,
  alert: PropTypes.shape({
    body: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClose: PropTypes.func,
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
  addClass: '',
  alert: {
    onClose: () => {}
  },
  buttonProps: {},
  dismissible: true,
  withBackButton: false,
}

export default Notice
