import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import RequestItem, { requestPropTypes } from '../RequestItem/RequestItem'

const RequestList = ({ backgroundColor, requests }) => (
  <>
    <Title title='My Requests' size='medium' />
    <div className='rounded overflow-hidden mb-4'>
      {requests.map((req, index) => (
        <Link key={req.id} href={`${req.href}`} passHref legacyBehavior>
          <RequestItem request={req} index={index} backgroundColor={backgroundColor} />
        </Link>
      ))}
    </div>
  </>
)

RequestList.propTypes = {
  backgroundColor: PropTypes.string,
  requests: PropTypes.arrayOf(PropTypes.shape(requestPropTypes)).isRequired,
}

RequestList.defaultProps = {
  backgroundColor: 'light'
}

export default RequestList
