import React from 'react'
import PropTypes from 'prop-types'
import TextBox from '../../components/TextBox/TextBox'
import Title from '../../components/Title/Title'

const RequestStats = ({ billingAddress, createdAt, deadline, detailsColor, projectCode, shippingAddress, headerColor }) => {
  const titleStyle = { color: headerColor }
  const textStyle = { color: detailsColor }

  return (
  <article className='request-stats mt-2'>
    <div className='mb-2'>
      <Title title='Request Info' size='small' />
    </div>
    <div className='mb-2'>
      <Title title='Date of request' size='x-small' style={titleStyle} />
      <TextBox text={createdAt} style={textStyle} />
    </div>
    <div className='mb-2'>
      <Title title='Proposals required by' size='x-small' style={titleStyle} />
      <TextBox text={deadline} style={textStyle} />
    </div>
    <div className='mb-2'>
      <Title title='Project code' size='x-small' style={titleStyle} />
      <TextBox text={projectCode} style={textStyle} />
    </div>
    <div className='mb-2'>
      <Title title='Shipping address' size='x-small' style={titleStyle} />
      <TextBox text={shippingAddress} style={textStyle} />
    </div>
    <div className='mb-2'>
      <Title title='Billing address' size='x-small' style={titleStyle} />
      <TextBox text={billingAddress} style={textStyle} />
    </div>
  </article>
)}

RequestStats.propTypes = {
  billingAddress: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  detailsColor: PropTypes.string,
  headerColor: PropTypes.string,
  projectCode: PropTypes.string,
  shippingAddress: PropTypes.string.isRequired,
}

RequestStats.defaultProps = {
  deadline: '',
  detailsColor: '#999999',
  headerColor: '#333333',
  projectCode: '',
}

export default RequestStats
