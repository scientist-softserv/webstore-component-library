import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './status-bar.scss'

const StatusBar = ({ statusArray, apiRequestStatus }) => (
  <div className='container'>
    <div className='row border bg-light'>
      {statusArray.map((statusObject, index) => {
        const { requestStatus, statusLabel, statusIcon } = statusObject
        return (
          <div
            className={`status-bar-column col-3 py-2 gap-2 d-flex justify-content-center align-items-center 
              ${index !== statusArray.length - 1 ? 'border-end' : ''} 
              ${requestStatus === apiRequestStatus ? 'active' : ''}`}
            key={statusLabel}
          >
            <FontAwesomeIcon icon={statusIcon} />
            {statusLabel}
          </div>
        )
      })}
    </div>
  </div>
)

StatusBar.propTypes = {
  statusArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  apiRequestStatus: PropTypes.string.isRequired,
}

export default StatusBar
