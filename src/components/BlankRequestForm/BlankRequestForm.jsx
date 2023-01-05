import React from 'react'
import PropTypes from 'prop-types'
import { Form, Row } from 'react-bootstrap'

const BlankRequestForm = ({ updateRequestForm }) => (
  <Row className='mt-4 mb-2'>
    <Form.Group className='mb-3' controlId='service-product-description'>
      <Form.Label>Enter a service or product description.</Form.Label>
      <Form.Control
        className='prevent-validation-styles'
        type='text'
        as='textarea'
        rows={3}
        onChange={(e) => updateRequestForm(e.target.value, 'data.description')}
        required
      />
      <Form.Control.Feedback type='invalid'>
        Please enter a service or a product description.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='mb-3' controlId='project-timeline'>
      <Form.Label>What is the timeline for this project?</Form.Label>
      <Form.Control
        as='textarea'
        className='prevent-validation-styles'
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
