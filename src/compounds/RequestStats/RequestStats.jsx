import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './request-stats.css'

const RequestStats = ({ billingAddress, createdAt, deadline, shippingAddress }) => {
  const shippingLines = shippingAddress.split(/\n/)
  const billingLines = billingAddress.split(/\n/)

  return (
    <Card className='w-25'>
      <Card.Header>
        <Card.Title>Request Info</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Date of request</Card.Subtitle>
        <Card.Text className='mb-4'>{createdAt}</Card.Text>
        <Card.Subtitle>Proposals required by</Card.Subtitle>
        <Card.Text className='mb-4'>{deadline}</Card.Text>
        <Card.Subtitle>Shipping Address</Card.Subtitle>
        {shippingLines.map((line, index) => (
          <Card.Text className={`${(index === shippingLines.length-1) ? 'mb-4' : 'mb-0'}`}>
            {line}
          </Card.Text>)
        )}
        <Card.Subtitle>Billing Address</Card.Subtitle>
        {billingLines.map((line, index) => (
          <Card.Text className={`${(index === billingLines.length-1) ? '' : 'mb-0'}`}>
            {line}
          </Card.Text>)
        )}
      </Card.Body>
    </Card>
  )
}

RequestStats.propTypes = {
  billingAddress: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  shippingAddress: PropTypes.string.isRequired,
}

RequestStats.defaultProps = {
  deadline: '',
}

export default RequestStats
