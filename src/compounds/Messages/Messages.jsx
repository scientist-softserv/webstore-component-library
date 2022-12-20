import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import TextBox from '../../components/TextBox/TextBox'

const Messages = ({ addClass, messages }) => (
  <div className={`${addClass}`}>
    <Title title='Messages' size='small' />
    {messages.length ? (messages.map((message, idx) => {
      const { avatar, body, id, name } = message

      return (
        <Card key={id} className={`${idx === (messages.length - 1) ? '' : 'mb-4'} flex-row border-0`}>
          <Card.Img variant='left' src={avatar} className='h-25' />
          <Card.Body className='pt-0'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {body}
            </Card.Text>
          </Card.Body>
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
)

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
