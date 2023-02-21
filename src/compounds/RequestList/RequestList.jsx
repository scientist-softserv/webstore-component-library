import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import RequestItem, { requestPropTypes } from '../RequestItem/RequestItem'

const RequestList = ({ backgroundColor, requests }) => (
  <>
    <Title title='My Requests' size='medium' />
    <div className='rounded overflow-hidden mb-4'>
      {requests.length === 0 ? (
        // the no-requests class is for testing purposes in the webstore - do not remove
        <p className='mt-2 no-requests'>
          You do not have any requests yet.
          <br />
          <a href='/browse'>Browse our available services</a> to create a request,
          or start a new general request by clicking the <b>"Initiate a Request"</b> button above.
        </p>
      ) : (requests.map((req, index) => (
        <Link key={req.uuid} href={req.href} passHref>
          <RequestItem request={req} index={index} backgroundColor={backgroundColor} />
        </Link>
      )))}
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
