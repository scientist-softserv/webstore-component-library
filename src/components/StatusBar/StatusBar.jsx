import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './status-bar.scss'

//if the apiRequestStatus === any of the status.requestStatuses that are at indexes below the same one as the apiRequestStatus

const StatusBar = ({statusArray, apiRequestStatus}) => {
  return (
    <div className='container'>
      <div className='row border bg-light'>
        {statusArray.map((statusObject, index, statusArray) => {
          const { requestStatus, statusLabel, statusIcon } = statusObject
          return (
            <div 
              className={`status-bar-column col-3 py-2 gap-2 d-flex justify-content-center align-items-center 
              ${index !== statusArray.length -1 ? "border-end" : ""} 
              ${requestStatus === apiRequestStatus ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={statusIcon}/>
              {statusLabel}
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

StatusBar.propTypes = {
  statusArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default StatusBar
