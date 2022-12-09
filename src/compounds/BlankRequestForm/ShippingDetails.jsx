import React, { useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap';
import { CountryDropdown } from 'react-country-region-selector';
import PropTypes from 'prop-types'


const AddressForm = ({ shippingOrBillingString, toggleBilling }) => {
  const [shippingCountry, setShippingCountry] = useState('');
  const [billingCountry, setBillingCountry] = useState('');

  // TODO: @summer-cook
  // add anything needed to save the values so they can be passed to the webstore
  return (
    <Card.Body>
      {shippingOrBillingString == 'Shipping' && (
        <Form.Group className='mb-5' controlId='address-name'>
          <Form.Control placeholder='Address Name' name='addressName'/>
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
          />
        </Form.Group>
      )}
    </Card.Body>
  )
}

const ShippingDetails = ({toggleBilling, shippingEqualsBilling}) => {
  return (
    <Card className='mb-4'>
      <Card.Header className='h3'>Shipping Details</Card.Header>
      <AddressForm
        shippingOrBillingString='Shipping' 
        shippingEqualsBilling={shippingEqualsBilling}
        toggleBilling={toggleBilling}
      />
      {shippingEqualsBilling === false && (
        <AddressForm
          shippingOrBillingString='Billing'
          shippingEqualsBilling={shippingEqualsBilling}
        />
      )}
    </Card>
  )
}
AddressForm.propTypes = {
  shippingOrBillingString: PropTypes.string.isRequired,
  shippingEqualsBilling: PropTypes.bool.isRequired,
  toggleBilling: PropTypes.func.isRequired,
}

ShippingDetails.propTypes = {
  shippingEqualsBilling: PropTypes.bool,
}

ShippingDetails.defaultProps = {
  shippingEqualsBilling: false,
}


export default ShippingDetails
