import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StatusBar = ({ backgroundColor, statusArray, apiRequestStatus, addClass }) => {
  const activeIndex = statusArray.findIndex(obj => obj.statusLabel === apiRequestStatus)
  const labelBgColor = (index) => {
    if ((index < activeIndex) || (activeIndex === statusArray.length -1)) {
      return `bg-${backgroundColor}-3`
    } else if (index === activeIndex) {
      return `bg-${backgroundColor}`
    } else {
      return `bg-${backgroundColor}-7`
    }
  }

  return (
    <div className={`container ${addClass}`}>
      <div className='row border' data-cy='status-bar'>
        {statusArray.map((statusObject, index) => {
          const { statusLabel, statusIcon } = statusObject
          const border = index !== statusArray.length - 1 ? 'border-end' : ''

          return (
            <div
              className={`status-bar-column col-3 py-2 gap-2 d-flex justify-content-center align-items-center
              ${border} ${labelBgColor(index)}`}
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
}

StatusBar.propTypes = {
  addClass: PropTypes.string,
  apiRequestStatus: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  statusArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

StatusBar.defaultProps = {
  addClass: '',
  backgroundColor: 'light',
}

export default StatusBar
