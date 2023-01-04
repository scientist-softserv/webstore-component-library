import React from 'react'
import PropTypes from 'prop-types'
import { Form, Row } from 'react-bootstrap'

const BlankRequestForm = ({ updateRequestForm }) => (
  <Row className='mt-4 mb-2'>
    <Form.Group className='mb-3' controlId='service-product-description'>
      <Form.Label>Enter a service or product description.</Form.Label>
      <Form.Control
        type="text"
        as='textarea'
        rows={3}
        onChange={(e) => updateRequestForm(e.target.value, 'data.description')}
        required
      />
    </Form.Group>
    <Form.Group className='mb-3' controlId='project-timeline'>
      <Form.Label>What is the timeline for this project?</Form.Label>
      <Form.Control
        as='textarea'
        rows={3}
        onChange={(e) => updateRequestForm(e.target.value, 'data.timeline')}
      />
    </Form.Group>
  </Row>
)

BlankRequestForm.propTypes = {
  updateRequestForm: PropTypes.func.isRequired,
}

export default BlankRequestForm
