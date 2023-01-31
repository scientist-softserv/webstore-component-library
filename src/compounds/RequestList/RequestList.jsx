import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import RequestItem from '../RequestItem/RequestItem'

const RequestList = ({ requests }) => (
  <>
    <Title title='My Requests' size='medium' />
    <div className='rounded overflow-hidden'>
      {requests.map((req, index) => (
        <Link key={req.id} href={`${req.href}`} passHref legacyBehavior>
          <RequestItem request={req} index={index} />
        </Link>
      ))}
    </div>
  </>
)

RequestList.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape(RequestItem.propTypes)).isRequired,
}

export default RequestList
