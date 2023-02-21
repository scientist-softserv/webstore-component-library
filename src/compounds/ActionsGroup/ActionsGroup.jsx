import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SendMessage from './actions/SendMessage'
import ViewFiles from './actions/ViewFiles'
import { allowNull } from '../../resources/utilityFunctions'
import './actions-group.scss'

const ActionsGroup = ({ backgroundColor, handleSendingMessagesOrFiles, files }) => {
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
        <ListGroup.Item
          action
          onClick={() => handleShow('SendMessage')}
          bsPrefix={`bg-${backgroundColor}-8 list-group-item`}
        >
          <FontAwesomeIcon icon='fa-envelope' />
          Send Message
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => handleShow('ViewFiles')}
          role='presentation'
          bsPrefix={`bg-${backgroundColor}-6 list-group-item`}
        >
          <FontAwesomeIcon icon='fa-file-lines' />
          View Files
        </ListGroup.Item>
      </ListGroup>
      {(action === 'SendMessage' && show)
        && (
          <SendMessage
            backgroundColor={backgroundColor}
            handleClose={handleClose}
            onSubmit={handleSendingMessagesOrFiles}
          />
        )}
      {(action === 'ViewFiles' && show)
        && (
          <ViewFiles
            backgroundColor={backgroundColor}
            handleClose={handleClose}
            files={files}
            onSubmit={handleSendingMessagesOrFiles}
          />
        )}
    </>
  )
}

ActionsGroup.propTypes = {
  backgroundColor: PropTypes.string,
  handleSendingMessagesOrFiles: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      contentLength: PropTypes.string.isRequired,
      contentType: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      download: PropTypes.string.isRequired,
      fileName: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      status: allowNull(PropTypes.string.isRequired),
      uploadedBy: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

ActionsGroup.defaultProps = {
  backgroundColor: 'secondary'
}

export default ActionsGroup
