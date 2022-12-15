import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './request-stats.scss'

const RequestStats = ({ addClass, billingInfo, createdAt, deadline, shippingInfo }) => (
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
      <Card.Text
        as='address'
        className='mb-4 request-stats-address'
        key={shippingInfo.id}
      >
        {shippingInfo.address}
      </Card.Text>
      <Card.Subtitle>Billing Address</Card.Subtitle>
      <Card.Text
        as='address'
        className='mb-4 request-stats-address'
        key={billingInfo.id}
      >
        {billingInfo.address}
      </Card.Text>
    </Card.Body>
  </Card>
)

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
