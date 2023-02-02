import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Offcanvas, Tab, Tabs } from 'react-bootstrap'
import FilesTable from '../../../components/FilesTable/FilesTable'

const ViewFiles = ({ files, handleClose, show }) => {
  const documentTabs = [
    {
      eventKey: 'files',
      title: 'Attachments',
      status: 'Other File'
    },
    {
      eventKey: 'status-updates',
      title: 'Status Updates',
      status: 'Status Update'
    },
    {
      eventKey: 'payment-status-files',
      title: 'Payment Status Files',
      // TODO(@summer-cook): fill this in when Sherman adds a file of this type
      status: 'TODO:FILL THIS IN'
    },
  ]
  return (
      <Offcanvas show={show} onHide={handleClose} placement='end' scroll='true'>
        <Offcanvas.Header className='d-flex border-bottom px-3 py-2 bg-light' closeButton>
          <Offcanvas.Title>Documents</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='border rounded p-2 m-3'>
            <Tabs defaultActiveKey="files" id="document-tabs">
              {documentTabs && documentTabs.map(tab => {
                const { eventKey, title, status } = tab
                let filteredFiles = files.filter(f => (status === f.status) || (status === 'Other File' && f.status === null))
                return (
                  <Tab eventKey={eventKey} title={title} className='p-2'>
                    <FilesTable files={filteredFiles} status={status} />
                  </Tab>
                )
              })}
            </Tabs>
        </Offcanvas.Body>
      </Offcanvas>
  )
}

ViewFiles.propTypes = {
  addClass: PropTypes.string,
}

ViewFiles.defaultProps = {
  addClass: '',
}

export default ViewFiles
