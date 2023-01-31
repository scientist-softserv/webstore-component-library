import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import Link from '../../components/Link/Link'

const MessageCardBody = ({ message }) => {
  const { avatar, body, id, name, attachments, timeSince } = message
  return (
    <Card key={id} className='pb-4 pt-4 flex-row border-0 border-top'>
      <Card.Img variant='left' src={avatar} className='h-25' />
      <Card.Body className='pt-0 pe-0 d-flex flex-column flex-md-row'>
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <span dangerouslySetInnerHTML={{ __html: body }} />
          </Card.Text>
          {(attachments.length > 0) && (attachments.map((attachment) => {
            const { contentLength, filename, uuid, href } = attachment
            return (
              <div key={uuid}>
                <Link
                  icon='fa-paperclip'
                  label={filename}
                  href={href}
                  addClass='small mt-2 me-2'
                />
                <span className='small text-muted'>{contentLength}</span>
              </div>
            )
          })
          )}
        </div>
        <span className='small text-muted text-nowrap ms-md-auto mt-2 mt-md-0'>{timeSince} ago</span>
      </Card.Body>
    </Card>
  )
}

MessageCardBody.propTypes = {
  message: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    timeSince: PropTypes.string.isRequired,
    attachments: PropTypes.arrayOf(
      PropTypes.shape({
        contentLength: PropTypes.string.isRequired,
        filename: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
}

export default MessageCardBody
