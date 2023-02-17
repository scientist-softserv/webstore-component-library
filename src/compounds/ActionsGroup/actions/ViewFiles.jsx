import React
  from 'react'
import PropTypes from 'prop-types'
import {
  Offcanvas,
  Tab,
  Tabs,
} from 'react-bootstrap'
import FilesTable from '../../../components/FilesTable/FilesTable'
import { allowNull } from '../../../resources/utilityFunctions'

const ViewFiles = ({ initialFiles, handleClose }) => {
  const documentTabs = [
    {
      eventKey: 'files',
      title: 'Attachments',
      status: 'Other File',
    },
    {
      eventKey: 'status-updates',
      title: 'Status Updates',
      status: 'Status Update',
    },
  ]

  return (
    <Offcanvas show onHide={handleClose} placement='end' scroll='true'>
      <Offcanvas.Header className='d-flex border-bottom px-3 py-2 bg-secondary-8' closeButton>
        <Offcanvas.Title>Documents</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='border rounded p-2 m-3'>
        <Tabs defaultActiveKey='files' id='document-tabs' justify fill>
          {documentTabs && documentTabs.map((tab) => {
            const { eventKey, title, status } = tab
            const filteredFiles = initialFiles.filter((f) => (status === f.status) || (status === 'Other File' && f.status === null))
            return (
              <Tab
                eventKey={eventKey}
                title={title}
                className='p-2'
                key={eventKey}
              >
                <FilesTable
                  files={filteredFiles}
                  status={status}
                />
              </Tab>
            )
          })}
        </Tabs>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

ViewFiles.propTypes = {
  initialFiles: PropTypes.arrayOf(
    PropTypes.shape({
      contentLength: PropTypes.string.isRequired,
      contentType: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      download: PropTypes.string.isRequired,
      fileName: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      status: allowNull(PropTypes.string.isRequired),
      uploadedBy: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default ViewFiles
