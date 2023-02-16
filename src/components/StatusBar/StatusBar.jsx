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
      <div className='row border'>
        {statusArray.map((statusObject, index) => {
          const { statusLabel, statusIcon } = statusObject
          const border = index !== statusArray.length - 1 ? 'border-end' : ''

          console.log({ activeIndex, index, label: labelBgColor(index)})

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
  // the webstore is currently configured to only accept 'light' or 'secondary' as the backgroundColor options because of the $custom-colors variable.
  // we are not limiting the prop type to only those two strings because the webstore options may expand in the future.
  backgroundColor: PropTypes.string,
  statusArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

StatusBar.defaultProps = {
  addClass: '',
  backgroundColor: 'light',
}

export default StatusBar
