import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { timeSince, formatBytes } from '../../resources/utilityFunctions'
import Link from '../../components/Link/Link'
import Title from '../../components/Title/Title'
import TextBox from '../../components/TextBox/TextBox'

const Messages = ({ addClass, messages }) => {
  return (
  <div className={`${addClass}`}>
    <Title title='Messages' size='small' />
    {messages.length ? (messages.map((message, idx) => {
      console.log({messages})
      const { avatar, body, id, name, attachments, dateAndTime } = message
      return (
        <Card key={id} className={`${idx === (messages.length - 1) ? '' : 'mb-4'} flex-row border-0`}>
          <Card.Img variant='left' src={avatar} className='h-25' />
          <Card.Body className='pt-0'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {body}
            </Card.Text>
            {(attachments.length > 0) && (attachments.map((attachment) => {
                const { content_length, filename, uuid } = attachment 
                // this href is the download URL from the marketplace- this works, since all these attachments already show up in the marketplace, and these requests will always be in the marketplace as well as the webstore
                // but, not sure if we should be using the URL from the marketplace or creating a new, webstore based url from the "download" property. download property returns a string like this example: "/quote_groups/10bd825f-c7e0-4c07-bd9e-f7982b21f435/attachments/nepal5.png"
                return (
                  <div key={uuid}>
                    <Link
                      icon={'fa-paperclip'}
                      label={filename}
                      href={`https://acme.scientist.com/secure_attachments/${uuid}`}
                      addClass='small mt-2 me-2'
                    />
                    <span className='small text-muted'>{`(${formatBytes(content_length)})`}</span>
                  </div>
                )
              })
            )}
          </Card.Body>
          <span className='small text-muted text-nowrap'>{timeSince(Date.parse(dateAndTime))} ago</span>
        </Card>
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
