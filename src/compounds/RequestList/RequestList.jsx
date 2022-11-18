import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import RequestItem from '../RequestItem/RequestItem'

const RequestList = ({ requests }) => (
  <>
    <Title title='My Requests' size='medium' />
    {requests.map((req) => (
      <Link key={req.id} href={`${req.identifier}`} passHref legacyBehavior>
        <RequestItem
          createdAt={req.createdAt}
          description={req.description}
          img={req.img}
          title={`${req.identifier}: ${req.name}`}
          status={req.status}
          updatedAt={req.updatedAt}
        />
      </Link>
    ))}
  </>
)

RequestList.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape(RequestItem.propTypes)).isRequired,
}

export default RequestList
