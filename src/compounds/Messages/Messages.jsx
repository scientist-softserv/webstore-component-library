import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MessageCardBody from './MessageCardBody'
import Title from '../../components/Title/Title'
import TextBox from '../../components/TextBox/TextBox'

const Messages = ({ addClass, messages }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${addClass}`}>
      <Title title='Messages' size='small' />
      {messages.length ? (messages.map((message, idx) => (
        ((messages.length > 3) && (idx < messages.length - 3)) ? (
          <>
            <Collapse in={open}>
              <div id='collapse-card'>
                <MessageCardBody messages={messages} message={message} idx={idx} />
              </div>
            </Collapse>
            {(idx === messages.length - 4) && (
              <button
                type='button'
                onClick={() => setOpen(!open)}
                aria-controls='collapse-card'
                aria-expanded={open}
                className='btn btn-link btn-sm text-decoration-none d-flex align-items-center mx-auto my-2 text-muted'
              >
                {open ? (
                  <>
                    <FontAwesomeIcon icon='fa-regular fa-square-minus' className='me-2' />
                    Hide earlier messages
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon='fa-regular fa-square-plus' className='me-2' />
                    Show earlier messages
                  </>
                )}
              </button>
            )}
          </>
        ) : (
          <MessageCardBody messages={messages} message={message} idx={idx} />
        )
      ))) : (
        <TextBox
          alignment='left'
          size='medium'
          text='No messages have been sent.'
        />
      )}
    </div>
  )
}

Messages.propTypes = {
  addClass: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}

Messages.defaultProps = {
  addClass: '',
}

export default Messages
