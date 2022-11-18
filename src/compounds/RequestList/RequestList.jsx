import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Loading from '../../components/Loading/Loading'
import Title from '../../components/Title/Title'
import RequestItem from '../RequestItem/RequestItem'

const RequestList = ({ requests, isLoading }) => (
  <>
    <Title title='My Requests' size='medium' />
    {isLoading
    ? (
      <Loading />
    ) : (
      requests.map((req) => (
        <Link key={req.id} href={`${req.href}`} passHref legacyBehavior>
          <RequestItem
            createdAt={req.createdAt}
            description={req.description}
            img={req.img}
            title={req.title}
            status={req.status}
            updatedAt={req.updatedAt}
          />
        </Link>
      ))
    )}
  </>
)

RequestList.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape(RequestItem.propTypes)).isRequired,
}

export default RequestList
