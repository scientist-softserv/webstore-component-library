import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SendMessage from './actions/SendMessage'
import ViewFiles from './actions/ViewFiles'
import './actions-group.scss'

const ActionsGroup = ({ initialFiles, handleSendingMessagesOrFiles }) => {
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
        {/* TODO(@summercook): return the this and the below commented code
        once the direction of https://github.com/scientist-softserv/webstore/issues/156
        has been decided */}
        {/* <ListGroup.Item action variant='primary' onClick={() => handleShow('SendMessage')}>
          <FontAwesomeIcon icon='fa-envelope' />
          Send Message
        </ListGroup.Item> */}
        <ListGroup.Item
          action
          variant='primary'
          onClick={() => handleShow('ViewFiles')}
          role='presentation'
        >
          <FontAwesomeIcon icon='fa-file-lines' />
          View Files
        </ListGroup.Item>
      </ListGroup>
      {/* {(action === 'SendMessage' && show)
        && (
          <SendMessage
            handleClose={handleClose}
            onSubmit={handleSendingMessagesOrFiles}
          />
        )} */}
      {(action === 'ViewFiles' && show)
        && (
          <ViewFiles
            show={show}
            handleClose={handleClose}
            initialFiles={initialFiles}
            //onSubmit={handleSendingMessagesOrFiles}
          />
        )}
    </>
  )
}

// ActionsGroup.propTypes = {
  //handleSendingMessages: PropTypes.func.isRequired,
// }

export default ActionsGroup
