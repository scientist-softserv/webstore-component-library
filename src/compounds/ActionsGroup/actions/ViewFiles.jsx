import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Alert,
  Button,
  CloseButton,
  Form,
  InputGroup,
  ListGroup,
  Offcanvas,
  Tab,
  Tabs,
} from 'react-bootstrap'
import FilesTable from '../../../components/FilesTable/FilesTable'
import { allowNull, apiV2CompatibleStrings, convertToBase64 } from '../../../resources/utilityFunctions'

const ViewFiles = ({ backgroundColor, initialFiles, handleClose, onSubmit }) => {
  const fileRef = useRef(null)
  const [files, setFiles] = useState(initialFiles)
  const [tempFiles, setTempFiles] = useState([])
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  //let newlyAddedFiles = []
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

    // TODO(summercook):
  // - comment back in the following 3 methods once posting messages/attachments is working
  // may need to use the handleSendingMessagesOrFiles to post
  
  const handleAddFile = async (event) => {
    event.preventDefault()
    try {
      // "event.target.files" returns a FileList, which looks like an array but does not respond to array methods
      // except "length". we are using the spread syntax to set "files" to be an iterable array
      const fileArray = [...event.target.files]
      const newBase64Files = await Promise.all(convertToBase64(fileArray))
      const newFiles = fileArray.map((file, index) => ({ [file.name]: newBase64Files[index] }))
      setTempFiles([...tempFiles, ...newFiles])
      if (showSuccessAlert) {
        setShowSuccessAlert(false)
      }
      fileRef.current.value = ''
    } catch (error) {
      throw new Error(error)
    }
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    await onSubmit({ files: apiV2CompatibleStrings([...tempFiles]) })
    if (tempFiles.length > 0) { 
      setShowSuccessAlert(true)
      setTempFiles([])
    }
  }

  const handleDeleteTempFile = (file) => {
    const remainingFiles = tempFiles.filter((obj) => obj !== file)
    setTempFiles(remainingFiles)
  }

  return (
    <Offcanvas show onHide={handleClose} placement='end' scroll='true'>
      <Offcanvas.Header className={`d-flex border-bottom px-3 py-2 bg-${backgroundColor}-8`} closeButton>
        <Offcanvas.Title>Documents</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='border rounded p-2 m-3'>
        <Form>
          <h6 className='mt-3'>Upload Additional Documents</h6>
          <InputGroup controlId='attachments' className='mb-3'>
            <Form.Control
            multiple
            type='file'
            onChange={handleAddFile}
            ref={fileRef}
            />
            <Button
            variant='outline-primary'
            onClick={handleSubmit}
            type='submit'
            >
              <FontAwesomeIcon icon='fa-upload' />
            </Button>
          </InputGroup>
        </Form>
        <ListGroup variant='flush'>
          {tempFiles.map((file) => {
            const fileName = Object.keys(file)[0]
            return (
              <ListGroup.Item key={fileName} className='d-flex align-items-center'>
              <span>{fileName}</span>
              <CloseButton onClick={() => handleDeleteTempFile(file)} className='ms-auto' />
              </ListGroup.Item>
            )
          })}
          {showSuccessAlert && 
            <Alert variant='success' onClose={() => setShowSuccessAlert(false)} dismissible >
              Your files have been uploaded successfully. It may take some time for them to appear below. 
            </Alert>
          }
        </ListGroup>
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
                  handleDeleteFile={handleDeleteTempFile}
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
  backgroundColor: PropTypes.string,
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

ViewFiles.defaultProps = {
  backgroundColor: 'secondary'
}

export default ViewFiles
