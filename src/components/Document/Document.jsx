import React from 'react'
import PropTypes from 'prop-types'

const Document = ({ id, date, documentStatusColor, documentType, documentTypeColor, documentStatus, subtotalPrice }) => (
  <div className='d-flex border rounded mb-2 bg-light'>
    <div className='d-flex align-items-center'>
      <div className='border-end p-2'>
        <b className='fs-5'>{id}:</b> {subtotalPrice}
      </div>
      <small className='text-muted fw-light p-2'>
        {date}
      </small>
    </div>
    <div className='ms-auto p-2'>
      <div className={`badge p-2 ${documentStatusColor}`}>
        {documentStatus}
      </div>
      <div className={`badge p-2 ms-2 text-uppercase ${documentTypeColor}`}>
        {documentType}
      </div>
    </div>
  </div>
)

Document.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  documentStatus: PropTypes.string.isRequired,
  documentStatusColor: PropTypes.string,
  documentType: PropTypes.string.isRequired,
  documentTypeColor: PropTypes.string,
  subtotalPrice: PropTypes.string.isRequired,
}

Document.defaultProps = {
  documentTypeColor: 'bg-dark',
  documentStatusColor: 'bg-secondary',
}

export default Document
