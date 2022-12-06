import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import PropTypes from 'prop-types'


const ShippingDetails = () => {
  const [shippingEqualsBilling, setShippingEqualsBilling] = useState(false)

  const toggleBilling = () => {
    setShippingEqualsBilling(!shippingEqualsBilling);
  }

  const Address = ({shippingOrBillingString}) => {
    return (
      <Card className='mb-4'>
        <Card.Header>{shippingOrBillingString} Details</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId={`address1-${shippingOrBillingString.toLowerCase()}`}>
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId={`address2-${shippingOrBillingString.toLowerCase()}`}>
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
  
            <Row className="mb-3">
              <Form.Group as={Col} controlId={`city-${shippingOrBillingString.toLowerCase()}`}>
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
  
              <Form.Group as={Col} controlId={`state-${shippingOrBillingString.toLowerCase()}`}>
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
  
              <Form.Group as={Col} controlId={`zip-${shippingOrBillingString.toLowerCase()}`}>
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
  
            {shippingOrBillingString == 'Shipping' && (
              <Form.Group className="mb-3" controlId="shippingEqualsBilling">
                <Form.Check 
                  type="checkbox"
                  label="My shipping address is the same as my billing address."
                  onChange={toggleBilling}
                  checked={shippingEqualsBilling}
                />
              </Form.Group>
            )}
  
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    )
  }
  return (
    <>
    <Address shippingOrBillingString='Shipping' />
    {shippingEqualsBilling === false && (
      <Address shippingOrBillingString='Billing'/>
    )}
    </>
  )
}

ShippingDetails.propTypes = {
  shippingEqualsBilling: PropTypes.bool,
}

ShippingDetails.defaultProps = {
  shippingEqualsBilling: false,
}

export default ShippingDetails
