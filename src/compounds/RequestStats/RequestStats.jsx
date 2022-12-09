import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './request-stats.css'

const RequestStats = ({ addClass, billingInfo, createdAt, deadline, shippingInfo }) => {
  const shippingAddress = shippingInfo.address.split(/\n/)
  const billingAddress = billingInfo.address.split(/\n/)

  return (
    <Card className='request-stats w-25'>
      <Card.Header className={`${addClass}`}>
        <Card.Title className='mb-0'>Request Info</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Date of request</Card.Subtitle>
        <Card.Text className='mb-4'>{createdAt}</Card.Text>
        <Card.Subtitle>Proposals required by</Card.Subtitle>
        <Card.Text className='mb-4'>{deadline}</Card.Text>
        <Card.Subtitle>Shipping Address</Card.Subtitle>
        {shippingAddress.map((line, index) => (
          <Card.Text
            key={shippingInfo.id}
            className={`${(index === shippingAddress.length - 1) ? 'mb-4' : 'mb-0'}`}
          >
            {line}
          </Card.Text>
        ))}
        <Card.Subtitle>Billing Address</Card.Subtitle>
        {billingAddress.map((line, index) => (
          <Card.Text
            key={billingInfo.id}
            className={`${(index === billingAddress.length - 1) ? '' : 'mb-0'}`}
          >
            {line}
          </Card.Text>
        ))}
      </Card.Body>
    </Card>
  )
}

RequestStats.propTypes = {
  addClass: PropTypes.string,
  billingInfo: PropTypes.shape({
    address: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  shippingInfo: PropTypes.shape({
    address: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
}

RequestStats.defaultProps = {
  addClass: '',
  deadline: '',
}

export default RequestStats
