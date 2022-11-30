import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SendMessage from './actions/SendMessage'
import './actions-group.scss'

const ActionsGroup = ({ handleSendingMessages }) => {
  const [show, setShow] = useState(false)
  const [action, setAction] = useState(null)

  const handleShow = (componentName) => {
    setAction(componentName)
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
          <FontAwesomeIcon icon='fa-envelope' />
          Send Message
        </ListGroup.Item>
      </ListGroup>
      {(action === 'SendMessage' && show)
        && (
          <SendMessage
            handleClose={handleClose}
            onSubmit={handleSendingMessages}
          />
        )}
    </>
  )
}

ActionsGroup.propTypes = {
  handleSendingMessages: PropTypes.func({}).isRequired,
}

export default ActionsGroup
