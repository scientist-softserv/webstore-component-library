import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Row, Col } from 'react-bootstrap';
import Title from '../../components/Title/Title'
import ShippingDetails from './ShippingDetails'
import AdditionalInfo from './AdditionalInfo';

const BlankRequestForm = () => {
  // used in the shipping details component
  const initialState = {
    name: 'New Request',
    billingSameAsShipping: false,
    proposedDeadline: null,
    billingAddress: {
      id: null,
      street: '',
      street2: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      text: '',
    },
    shippingAddress: {
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
   * @param {event} event onChange event
   * @param {string} property dot notated string representing the property in initialValue
   * @returns {object} the updated component state
   */
  const updateRequestForm = (event, property) => {
    const [initialProperty, nestedProperty] = property.split('.')

    setRequestForm((currentState) => {
      const updatedState = nestedProperty
        ? { [initialProperty]: { ...requestForm[initialProperty], [nestedProperty]: event.target.value }}
        : { [initialProperty]: event.target.value }

      return {
        ...currentState,
        ...updatedState,
      }
    })
  }

  // used in the additional info component
  const [showProposalDueDate, setShowProposalDueDate] = useState(true)
  const toggleShowProposalDueDate = () => {
    setShowProposalDueDate(showProposalDueDate => !showProposalDueDate);
  }

  const handleSubmit = () => {

  }

  return (
    <>
      <Title title='New Request'/>
      <Form onSubmit={handleSubmit} id='new-request-form'>
        <Row className='mt-4 mb-2'>
          <Form.Group className='mb-3' controlId='service-product-description'>
            <Form.Label>Enter a service or product description.</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='project-timeline'>
            <Form.Label>What is the timeline for this project?</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <ShippingDetails
              toggleBilling={toggleBilling}
              shippingEqualsBilling={shippingEqualsBilling}
            />
          </Col>
          <Col>
            <AdditionalInfo
              toggleShowProposalDueDate={toggleShowProposalDueDate}
              showProposalDueDate={showProposalDueDate}
            />
          </Col>
        </Row>
        <Button
          variant='primary'
          type='submit'
          className='my-2 ms-auto d-block'
          size='lg'>
            Initiate Request
        </Button>
      </Form>
    </>
  )
}

BlankRequestForm.propTypes = {
  
}

BlankRequestForm.defaultProps = {
  
}

export default BlankRequestForm
