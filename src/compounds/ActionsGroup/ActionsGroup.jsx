import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import SendMessage from './actions/SendMessage'

const ActionsGroup = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <ListGroup>
        <ListGroup.Item as='button' onClick={() => handleShow()}>
          Send Message
        </ListGroup.Item>
      </ListGroup>
      {show && <SendMessage handleClose={handleClose} />}
    </>
  )
}

export default ActionsGroup
