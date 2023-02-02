import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Offcanvas, Tab, Tabs } from 'react-bootstrap'
import FilesTable from '../../../components/FilesTable/FilesTable'

const ViewFiles = ({ files, handleClose, show }) => {
  return (
      <Offcanvas show={show} onHide={handleClose} placement='end' scroll='true'>
        <Offcanvas.Header className='d-flex border-bottom px-3 py-2 bg-light' closeButton>
          <Offcanvas.Title>Documents</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='border rounded p-2 m-3'>
            <Tabs
              defaultActiveKey="files"
              id="document-tabs"
            >
              <Tab eventKey="files" title="Attachments" className='p-2'>
                <FilesTable files={files} />
              </Tab>
              <Tab eventKey="status-updates" title="Status Updates" className='p-2'>
                goodbye
              </Tab>
              <Tab eventKey="payment-status-files" title="Payment Status Files" className='p-2'>
                goodbye
              </Tab>
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
