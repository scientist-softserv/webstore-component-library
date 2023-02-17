import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  CloseButton,
  FloatingLabel,
  Form,
  ListGroup,
  Modal,
} from 'react-bootstrap'
import { apiV2CompatibleStrings, convertToBase64 } from '../../../resources/utilityFunctions'
import './styles.scss'

const SendMessage = ({ backgroundColor, onSubmit, handleClose }) => {
  const messageRef = useRef(null)
  const fileRef = useRef(null)
  const [files, setFiles] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ message: messageRef.current.value, files: apiV2CompatibleStrings(files) })
    handleClose()
  }

  const handleAddFile = async (event) => {
    event.preventDefault()
    try {
      // "event.target.files" returns a FileList, which looks like an array but does not respond to array methods
      // except "length". we are using the spread syntax to set "files" to be an iterable array
      const fileArray = [...event.target.files]
      const newBase64Files = await Promise.all(convertToBase64(fileArray))
      const newFiles = fileArray.map((file, index) => ({ [file.name]: newBase64Files[index] }))

      setFiles([...files, ...newFiles])
      fileRef.current.value = ''
    } catch (error) {
      throw new Error(error)
    }
  }

  const handleDeleteFile = (file) => {
    const remainingFiles = files.filter((obj) => obj !== file)
    setFiles(remainingFiles)
  }

  return (
    <Modal show onHide={handleClose}>
      <Modal.Header closeButton className={`bg-${backgroundColor}-8`}>
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
              onChange={handleAddFile}
              ref={fileRef}
            />
          </Form.Group>
          <ListGroup variant='flush'>
            {files.map((file) => {
              const fileName = Object.keys(file)[0]

              return (
                <ListGroup.Item key={fileName} className='d-flex align-items-center'>
                  <span>{fileName}</span>
                  <CloseButton onClick={() => handleDeleteFile(file)} className='ms-auto' />
                </ListGroup.Item>
              )
            })}
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

SendMessage.propTypes = {
  backgroundColor: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}

SendMessage.defaultProps = {
  backgroundColor: 'secondary'
}

export default SendMessage
