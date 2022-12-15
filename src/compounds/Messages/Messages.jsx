import React from 'react'
import { Card } from 'react-bootstrap'
import Title from '../../components/Title/Title'

const Messages = ({ messages }) => (
  <>
    <Title title='Messages' size='small' />
    {messages.map((message, idx) => {
      const { avatar, body, name } = message

      return (
        <Card className={`${idx === (messages.length - 1) ? '' : 'mb-4'} flex-row border-0`}>
          <Card.Img variant='left' src={avatar} className='h-25' />
          <Card.Body className='pt-0'>
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
