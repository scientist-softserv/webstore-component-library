import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import './actions-group.scss'
// NOTE(alishaevn): when adding more actions in the future, list each action as an additional list group item
// and then add the new action component as a conditional underneath the list group
// future actions may be disabled in certain request states as well so reger to https://react-bootstrap.github.io/components/list-group/

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
      <ListGroup className='actions-group'>
        <ListGroup.Item action variant='primary' onClick={() => handleShow('SendMessage')}>
          Send Message
        </ListGroup.Item>
      </ListGroup>
      {(action === 'SendMessage' && show) && <SendMessage handleClose={handleClose} />}
    </>
  )
}

export default ActionsGroup
