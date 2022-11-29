import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const SendMessage = ({ handleClose }) => (
  <Modal show={true} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Send a Message</Modal.Title>
    </Modal.Header>
    <Modal.Body>This is where we will send our message!</Modal.Body>
    <Modal.Footer>
      {/* TODO(alishaevn): make the message send */}
      <Button variant='primary' onClick={() => 'sending a message...'}>
        Send
      </Button>
    </Modal.Footer>
  </Modal>
)

export default SendMessage
