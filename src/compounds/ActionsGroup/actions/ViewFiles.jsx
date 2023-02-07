import React
  // { useState, useRef } TODO comment back in
  from 'react'
import PropTypes from 'prop-types'
import {
  // Button,
  // CloseButton,
  // Form,
  // InputGroup,
  // ListGroup,
  Offcanvas,
  Tab,
  Tabs,
} from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FilesTable from '../../../components/FilesTable/FilesTable'
// import { apiV2CompatibleStrings, convertToBase64 } from '../../../resources/utilityFunctions'

const ViewFiles = ({ initialFiles, handleClose, show }) => {
  // TODO(summercook):
  // - comment back in the following 2 lines & above imports once posting messages/attachments is working
  // const fileRef = useRef(null)
  // const [files, setFiles] = useState([])

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
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   onSubmit({ files: apiV2CompatibleStrings(files) })
  // }

  // const handleAddFile = async (event) => {
  //   event.preventDefault()
  //   try {
  //     // "event.target.files" returns a FileList, which looks like an array but does not respond to array methods
  //     // except "length". we are using the spread syntax to set "files" to be an iterable array
  //     const fileArray = [...event.target.files]
  //     const newBase64Files = await Promise.all(convertToBase64(fileArray))
  //     const newFiles = fileArray.map((file, index) => ({ [file.name]: newBase64Files[index] }))

  //     setFiles([...files, ...newFiles])
  //     fileRef.current.value = ''
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }

  // const handleDeleteFile = (file) => {
  //   const remainingFiles = files.filter((obj) => obj !== file)
  //   setFiles(remainingFiles)
  // }
  return (
    <Offcanvas show={show} onHide={handleClose} placement='end' scroll='true'>
      <Offcanvas.Header className='d-flex border-bottom px-3 py-2 bg-light' closeButton>
        <Offcanvas.Title>Documents</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='border rounded p-2 m-3'>
        {/* TODO(summercook): see above comment */}
        {/* <Form>
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
            {files.map((file) => {
              const fileName = Object.keys(file)[0]

              return (
                <ListGroup.Item key={fileName} className='d-flex align-items-center'>
                <span>{fileName}</span>
                <CloseButton onClick={() => handleDeleteFile(file)} className='ms-auto' />
                </ListGroup.Item>
                )
              })}
            </ListGroup> */}
        <Tabs defaultActiveKey='files' id='document-tabs'>
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
                  // TODO(summercook): see above comment
                  // handleDeleteFile={handleDeleteFile}
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
      status: PropTypes.string.isRequired,
      uploadedBy: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default ViewFiles
