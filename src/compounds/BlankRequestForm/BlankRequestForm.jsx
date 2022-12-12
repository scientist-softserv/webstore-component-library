import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Form,
  Row,
  Col,
} from 'react-bootstrap'
import Title from '../../components/Title/Title'
import ShippingDetails from './ShippingDetails'
import AdditionalInfo from './AdditionalInfo'

const BlankRequestForm = ({ onSubmit }) => {
  const initialState = {
    name: 'New Request',
    billingSameAsShipping: false,
    proposedDeadline: null,
    billing: {
      id: null,
      street: '',
      street2: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      text: '',
    },
    shipping: {
      id: null,
      street: '',
      street2: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      text: '',
    },
    data: {
      timeline: '',
      description: '',
      suppliersIdentified: 'Yes',
    },
    // TODO(alishaevn): how do we handle attachments?
  }

  const [requestForm, setRequestForm] = useState(initialState)

  /**
   * @param {object} event onChange event
   * @param {string} property dot notated string representing the property in initialValue
   * @returns {object} the updated component state
   */
  const updateRequestForm = (value, property) => {
    const [initialProperty, nestedProperty] = property.split('.')

    setRequestForm((currentState) => {
      const updatedState = nestedProperty
        ? { [initialProperty]: { ...requestForm[initialProperty], [nestedProperty]: value } }
        : { [initialProperty]: value }

      return {
        ...currentState,
        ...updatedState,
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(requestForm)
    if (requestForm.billingSameAsShipping === true) {
      Object.assign(requestForm.billing, requestForm.shipping)
    }
  }

  return (
    <>
      <Title title='New Request' />
      <Form onSubmit={handleSubmit} id='new-request-form'>
        <Row className='mt-4 mb-2'>
          <Form.Group className='mb-3' controlId='service-product-description'>
            <Form.Label>Enter a service or product description.</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              onChange={(e) => updateRequestForm(e.target.value, 'data.description')}
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
        <Row>
          <Col md={6}>
            <ShippingDetails
              billingCountry={requestForm.billing.country}
              shippingCountry={requestForm.shipping.country}
              updateRequestForm={updateRequestForm}
            />
          </Col>
          <Col md={6}>
            <AdditionalInfo
              updateRequestForm={updateRequestForm}
            />
          </Col>
        </Row>
        <Button
          variant='primary'
          type='submit'
          className='my-2 ms-auto d-block'
          size='lg'
        >
          Initiate Request
        </Button>
      </Form>
    </>
  )
}

BlankRequestForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default BlankRequestForm
