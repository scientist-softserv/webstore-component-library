import React, { useRef, useState } from 'react'
import {
  Button,
  CloseButton,
  FloatingLabel,
  Form,
  ListGroup,
  Modal,
} from 'react-bootstrap'
import './styles.scss'

const SendMessage = ({ onSubmit, handleClose }) => {
  const messageRef = useRef(null)
  const fileRef = useRef(null)
  const [files, setFiles] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ message: messageRef.current.value, files })
    handleClose()
  }

  const handleAttachments = (event) => {
    event.preventDefault()
    // "event.target.files" returns a FileList, which looks like an array but does not respond to array methods
    // except "length". we are using the spread syntax to set "files" to be an iterable array
    setFiles([...files, ...event.target.files])
    fileRef.current.value = ''
  }

  const handleDeleteFile = (file) => {
    const remainingFiles = files.filter(obj => obj !== file)
    setFiles(remainingFiles)
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
              <Form.Control as='textarea' placeholder='Message' ref={messageRef} />
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId='message-attachments' className='mb-3'>
            <Form.Label>Add Files...</Form.Label>
            <Form.Control
              multiple
              type='file'
              onChange={handleAttachments}
              ref={fileRef}
            />
          </Form.Group>
          <ListGroup variant='flush'>
            {files.map(file => (
              <ListGroup.Item key={file.name}>
                {file.name}
                <CloseButton onClick={() => handleDeleteFile(file)} />
              </ListGroup.Item>
            ))}
          </ListGroup>
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
