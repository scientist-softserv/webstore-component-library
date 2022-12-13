import React, { useRef, useState } from 'react'
import {
  Button,
  FloatingLabel,
  Form,
  Modal,
} from 'react-bootstrap'
import './styles.scss'

const SendMessage = ({ onSubmit, handleClose }) => {
  const inputRef = useRef(null)
  const [files, setFiles] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ message: inputRef.current.value, files })
    handleClose()
  }

  const handleAttachments = (event) => {
    event.preventDefault()
    // "event.target.files" returns a FileList, which looks like an array but does not respond to array methods
    // except "length". we are using the spread syntax to set "files" to be an iterable array
    setFiles([...event.target.files])
  }

  return (
    <Modal show={true} onHide={handleClose}>
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
          <Form.Group controlId='message-attachments' className='mb-3'>
            <Form.Label>Add Files...</Form.Label>
            <Form.Control
              multiple
              type='file'
              onChange={handleAttachments}
            />
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
