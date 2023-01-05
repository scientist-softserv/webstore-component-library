import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Card, CloseButton, Form, ListGroup } from 'react-bootstrap'
import { convertToBase64 } from '../../resources/utilityFunctions'

const AdditionalInfo = ({ updateRequestForm }) => {
  const [showProposalDate, setShowProposalDate] = useState(true)
  const [files, setFiles] = useState([])
  const today = new Date().toISOString().slice(0, 10)
  const fileRef = useRef(null)
  const handleChange = (value) => {
    updateRequestForm(value, 'proposedDeadline')
  }

  const handleAddFile = async (event) => {
    event.preventDefault()
    try {
      // "event.target.files" returns a FileList, which looks like an array but does not respond to array methods
      // except "length". we are using the spread syntax to set "files" to be an iterable array
      const fileArray = [...event.target.files]
      const newBase64Files = await Promise.all(convertToBase64(fileArray))
      const newFiles = fileArray.map((file, index) => ({ [file.name]: newBase64Files[index] }))

      setFiles([...files, ...newFiles])
      fileRef.current.value = ''
    } catch (error) {
      throw new Error(error)
    }
  }

  const handleDeleteFile = (file) => {
    const remainingFiles = files.filter((obj) => obj !== file)
    setFiles(remainingFiles)
  }

  return (
    <Card className='mb-4'>
      <Card.Header className='h3'>Additional Information</Card.Header>
      <Card.Body>
        {showProposalDate
          && (
            <Form.Group
              className='mb-3'
              controlId='required-by'
            >
              <Form.Label>Proposals Required By:</Form.Label>
              <Form.Control
                className='prevent-validation-styles'
                type='date'
                min={today}
                placeholder='Proposals Required By'
                disabled={showProposalDate === false}
                onChange={showProposalDate && ((e) => handleChange(e.target.value))}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please select a date when you will need your proposal, or check the box below.
              </Form.Control.Feedback>
            </Form.Group>
          )}
        <Form.Group
          className='mb-3'
          controlId='open-proposal-due-date'
        >
          <Form.Check
            className='prevent-validation-styles'
            type='checkbox'
            label='Proposals can be submitted at any time.'
            onChange={() => {
              setShowProposalDate(!showProposalDate)
              if (showProposalDate) handleChange(null)
            }}
          />
        </Form.Group>
        {/* TODO(summercook): figure out how these attachments will be saved.
        Currently we have an open question in slack */}
        <Form.Group controlId='attachments' className='mb-3'>
          <Form.Label>Attachments:</Form.Label>
          <Form.Control
            className='prevent-validation-styles'
            multiple
            type='file'
            onChange={handleAddFile}
            ref={fileRef}
          />
        </Form.Group>
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
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

AdditionalInfo.propTypes = {
  updateRequestForm: PropTypes.func.isRequired,
}

export default AdditionalInfo
