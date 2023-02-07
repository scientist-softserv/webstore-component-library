import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import SendMessage from './actions/SendMessage'
import ViewFiles from './actions/ViewFiles'
import './actions-group.scss'

// TODO: add back handleSendingMessagesOrFiles into the props. see below TODO.
const ActionsGroup = ({ initialFiles }) => {
  console.log('initialfiles', initialFiles)
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
        once we are able to refactor posting messages & attachments */}
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
            // onSubmit={handleSendingMessagesOrFiles}
          />
        )}
    </>
  )
}

ActionsGroup.propTypes = {
  // handleSendingMessagesOrFiles: PropTypes.func.isRequired,
  initialFiles: PropTypes.arrayOf(
    PropTypes.shape({
      contentLength: PropTypes.string.isRequired,
      content_length: PropTypes.number.isRequired,
      content_type: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      download: PropTypes.string.isRequired,
      filename: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      uploadedBy: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default ActionsGroup
