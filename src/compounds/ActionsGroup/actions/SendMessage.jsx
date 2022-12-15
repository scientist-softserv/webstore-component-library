import React, { useRef } from 'react'
import {
  Button,
  FloatingLabel,
  Form,
  Modal,
} from 'react-bootstrap'
import './styles.scss'

const SendMessage = ({ onSubmit, handleClose }) => {
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ value: inputRef.current.value })
    handleClose()
  }

  return (
    <Modal show onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send a Message</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group>
            <FloatingLabel controlId='send-message' className='mb-3' label='Message'>
              <Form.Control as='textarea' placeholder='Message' ref={inputRef} />
            </FloatingLabel>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleSubmit} type='submit'>
            Send
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default SendMessage
