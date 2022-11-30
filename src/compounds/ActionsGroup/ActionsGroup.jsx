import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import SendMessage from './actions/SendMessage'

const ActionsGroup = () => {
  const [show, setShow] = useState(false)
  const [action, setAction] = useState(null)

  const handleShow = (action) => {
    setAction(action)
    setShow(true)
  }

  const handleClose = () => {
    setAction(null)
    setShow(false)
  }

  return (
    <>
        <ListGroup.Item action variant='primary' onClick={() => handleShow('SendMessage')}>
          Send Message
        </ListGroup.Item>
      </ListGroup>
      {(action === 'SendMessage' && show) && <SendMessage handleClose={handleClose} />}
    </>
  )
}

export default ActionsGroup
