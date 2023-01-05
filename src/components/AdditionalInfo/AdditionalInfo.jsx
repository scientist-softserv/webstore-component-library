import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

const AdditionalInfo = ({ updateRequestForm }) => {
  const [showProposalDate, setShowProposalDate] = useState(true)
  const today = new Date().toISOString().slice(0, 10)
  const handleChange = (value) => {
    updateRequestForm(value, 'proposedDeadline')
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
              <Form.Control.Feedback type="invalid">
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
            type='file'
            multiple 
          />
        </Form.Group>
      </Card.Body>
    </Card>
  )
}

AdditionalInfo.propTypes = {
  updateRequestForm: PropTypes.func.isRequired,
}

export default AdditionalInfo
