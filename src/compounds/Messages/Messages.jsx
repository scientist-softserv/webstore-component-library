import React from 'react'
import { Card } from 'react-bootstrap'
import Title from '../../components/Title/Title'

const Messages = ({ messages }) => (
  <>
    <Title title='Messages' size='small' />
    {messages.map((message, idx) => {
    const { avatar, body, name } = message

      return (
        <Card className={`${idx === (messages.length - 1) ? '' : 'mb-4'} flex-row`}>
          <Card.Img variant='left' src={avatar} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {body}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    })}
  </>
)


export default Messages
