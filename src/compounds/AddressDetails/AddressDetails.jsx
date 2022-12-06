import React, { useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap';
import { CountryDropdown } from 'react-country-region-selector';
import PropTypes from 'prop-types'


const AddressDetails = () => {
  const [shippingEqualsBilling, setShippingEqualsBilling] = useState(false)
  const [shippingCountry, setShippingCountry] = useState('');
  const [billingCountry, setBillingCountry] = useState('');

  const toggleBilling = () => {
    setShippingEqualsBilling(!shippingEqualsBilling);
  }

  const AddressForm = ({shippingOrBillingString, shippingOrBillingIndex}) => {
    // TODO: @summer-cook
    // Manage the state for the inputs so they persist after changing the select dropdown
    // add anything needed to save the values so they can be passed to the webstore
    return (
        <Card.Body>
          <Form>
            {shippingOrBillingString == 'Shipping' && (
              <Form.Group className='mb-5' controlId='address-name' name={`addressName`}>
                <Form.Control placeholder='Address Name'/>
              </Form.Group>
            )}

            <Card.Title className='mb-3'>{shippingOrBillingString} Address</Card.Title>

            <Form.Group className='mb-3' controlId={`address1-${shippingOrBillingString.toLowerCase()}`}>
              <Form.Control placeholder='Address' />
            </Form.Group>
  
            <Form.Group className='mb-3' controlId={`address2-${shippingOrBillingString.toLowerCase()}`}>
              <Form.Control placeholder='Address Line 2 (optional)' />
            </Form.Group>
  
            <Form.Group className='mb-3' controlId={`city-${shippingOrBillingString.toLowerCase()}`}>
              <Form.Control placeholder='City/Region' />
            </Form.Group>

            <Row className='mb-3'>
              <Form.Group as={Col} controlId={`state-${shippingOrBillingString.toLowerCase()}`}>
                <Form.Control placeholder='State/Province'/>
              </Form.Group>
  
              <Form.Group as={Col} controlId={`zip-${shippingOrBillingString.toLowerCase()}`}>
                <Form.Control placeholder='Zip/Postal Code'/>
              </Form.Group>
            </Row>
            {/* the country dropdown is displaying the countries correctly, but there are several issues that need to be addressed.  
            - selecting a country erases/resets the rest of the form - need to handle the state of the form so it saves the values. It uses controlled inputs and i'm not sure how that is different from uncontrolled
            - theres might be a better way to manage the state as opposed to using 2 separate state hooks for shipping and billing countries
            */}
            <CountryDropdown
              name={`country-${shippingOrBillingString.toLowerCase()}`}
              priorityOptions={['US', 'GB', 'CA']}
              value={shippingOrBillingString === 'Shipping' ? shippingCountry : billingCountry}
              onChange={shippingOrBillingString === 'Shipping' ? (val) => setShippingCountry(val) : (val) => setBillingCountry(val)}
              className='form-select mb-3 form-control'
              id={`country-${shippingOrBillingString.toLowerCase()}`}
            />
  
            {shippingOrBillingString == 'Shipping' && (
              <Form.Group className='mb-3' controlId='shippingEqualsBilling'>
                <Form.Check 
                  type='checkbox'
                  label='My shipping address is the same as my billing address.'
                  onChange={toggleBilling}
                  checked={shippingEqualsBilling}
                />
              </Form.Group>
            )}
          </Form>
        </Card.Body>
    )
  }
  return (
    <>
    <Card className='mb-4'>
      <Card.Header className='h3'>Shipping Details</Card.Header>
      <AddressForm
        shippingOrBillingString='Shipping' 
        shippingOrBillingIndex={1} 
      />
      {shippingEqualsBilling === false && (
        <AddressForm
          shippingOrBillingString='Billing'
          shippingOrBillingIndex={2}
        />
      )}
    </Card>
    </>
  )
}

AddressDetails.propTypes = {
  shippingEqualsBilling: PropTypes.bool,
}

AddressDetails.defaultProps = {
  shippingEqualsBilling: false,
}

export default AddressDetails
