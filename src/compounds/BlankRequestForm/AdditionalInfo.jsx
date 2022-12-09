import React from 'react'
import { Card, Form } from 'react-bootstrap';
import PropTypes from 'prop-types'


const AdditionalInfo = ({ showProposalDueDate, toggleShowProposalDueDate }) => {
  let today = new Date().toISOString().slice(0, 10)
  return (
    <Card className='mb-4'>
      <Card.Header className='h3'>Additional Information</Card.Header>
      <Card.Body>
      <Form.Group className='mb-3' controlId='project-code'>
        <Form.Control placeholder='Project Code' />
      </Form.Group>
      <Form.Group 
        className='mb-3'
        controlId='required-by'>
        <Form.Label>Proposals Required By:</Form.Label>
        <Form.Control
          type='date' 
          min={today}
          placeholder='Proposals Required By'
            disabled={showProposalDueDate === true ? true : false}
        />
      </Form.Group>
      <Form.Group
        className='mb-3'
        controlId='open-proposal-due-date'
      >
        <Form.Check 
          type='checkbox'
          label='Proposals can be submitted at any time.'
            onChange={toggleShowProposalDueDate}
        />
      </Form.Group>
      <Form.Group controlId='attachments' className='mb-3'>
        <Form.Label>Attachments:</Form.Label>
        <Form.Control type='file' multiple />
      </Form.Group>
    </Card.Body>
  </Card>
  )
}


AdditionalInfo.propTypes = {
  showProposalDueDate: PropTypes.bool.isRequired,
  toggleShowProposalDueDate: PropTypes.func.isRequired,
}

export default AdditionalInfo
