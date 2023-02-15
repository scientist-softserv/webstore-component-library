import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import RequestItem, { requestPropTypes } from '../RequestItem/RequestItem'

const RequestList = ({ requests }) => (
  <>
    <Title title='My Requests' size='medium' />
    <div className='rounded overflow-hidden'>
      {requests.length === 0 ? (
        <p className='mt-2 no-requests'>
          You do not have any requests yet.
          <br />
          <a href='/browse'>Browse our available services</a> to create a request,
          or start a new general request by clicking the <b>"Initiate a Request"</b> button above.
        </p>
      ) : (requests.map((req, index) => (
        <Link key={req.id} href={`${req.href}`} passHref legacyBehavior>
          <RequestItem request={req} index={index} />
        </Link>
      )))}
    </div>
  </>
)

RequestList.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape(requestPropTypes)).isRequired,
}

export default RequestList
