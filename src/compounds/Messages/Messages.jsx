import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Collapse } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { timeSince, formatBytes } from '../../resources/utilityFunctions'
import Link from '../../components/Link/Link'
import Title from '../../components/Title/Title'
import TextBox from '../../components/TextBox/TextBox'

const MessageCardBody = ({messages, message, idx}) => {
  const { avatar, body, id, name, attachments, dateAndTime } = message
  return (
    <Card key={id} className={`${idx === (messages.length - 1) ? '' : 'pb-4'} pt-4 flex-row border-0 border-top`}>
      <Card.Img variant='left' src={avatar} className='h-25' />
      <Card.Body className='pt-0 pe-0 d-flex flex-column flex-md-row'>
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
          {(attachments.length > 0) && (attachments.map((attachment) => {
              const { content_length, filename, uuid, href } = attachment
              return (
                <div key={uuid}>
                  <Link
                    icon={'fa-paperclip'}
                    label={filename}
                    href={href}
                    addClass='small mt-2 me-2'
                  />
                  <span className='small text-muted'>{content_length}</span>
                </div>
              )
            })
          )}
        </div>
        <span className='small text-muted text-nowrap ms-md-auto mt-2 mt-md-0'>{dateAndTime} ago</span>
      </Card.Body>
    </Card>
  )
}
const Messages = ({ addClass, messages }) => {
  const [open, setOpen] = useState(false);
  return (
  <div className={`${addClass}`}>
    <Title title='Messages' size='small' />
    {messages.length ? (messages.map((message, idx) => {
      return (
        <>
          {((messages.length > 3) && (idx != messages.length - 1 && idx != messages.length - 2 && idx != messages.length - 3)) ? (
            <>
              <Collapse in={open}>
                <div id='collapse-card'>
                  <MessageCardBody messages={messages} message={message} idx={idx}/>
                </div>
              </Collapse>
              {(idx === messages.length - 4) && (
                  <button
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-card"
                    aria-expanded={open}
                    className='btn btn-link btn-sm text-decoration-none d-flex align-items-center mx-auto my-2 text-muted'
                  >
                    {open ? (
                      <>
                        <FontAwesomeIcon icon='fa-regular fa-square-minus' className='me-2'/>
                        Hide earlier messages
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon='fa-regular fa-square-plus' className='me-2'/>
                        Show earlier messages
                      </>
                      )
                    }
                  </button>
              )}
            </>
          ) : (
            <MessageCardBody messages={messages} message={message} idx={idx}/>
          )}

        </>
      )
    })) : (
      <TextBox
        alignment='left'
        size='medium'
        text='No messages have been sent.'
      />
    )}
  </div>
)}

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
