import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Row, Col } from 'react-bootstrap';
import Title from '../../components/Title/Title'
import ShippingDetails from './ShippingDetails'
import AdditionalInfo from './AdditionalInfo';

const BlankRequestForm = () => {
  // used in the shipping details component
  const [shippingEqualsBilling, setShippingEqualsBilling] = useState(false)
  const [shippingValues, setShippingValues] = useState('');
  const [billingValues, setBillingValues] = useState('');

  // used in the additional info component
  const [openProposalDueDate, setOpenProposalDueDate] = useState()

  const toggleBilling = () => {
    setShippingEqualsBilling(shippingEqualsBilling => !shippingEqualsBilling);
    if (shippingEqualsBilling === true) {
      setBillingValues(shippingValues)
    }
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
