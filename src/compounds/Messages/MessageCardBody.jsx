import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import Link from '../../components/Link/Link'

const MessageCardBody = ({ messages, message, idx }) => {
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
                  icon='fa-paperclip'
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

MessageCardBody.propTypes = {
  addClass: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}

MessageCardBody.defaultProps = {
  addClass: '',
}

export default MessageCardBody