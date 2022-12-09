import React, { useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap';
import { CountryDropdown } from 'react-country-region-selector';
import PropTypes from 'prop-types'


const AddressForm = ({ addressType, toggleBilling }) => {
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
      <Card.Title className='mb-3'>{addressType} Address</Card.Title>

      <Form.Group className='mb-3' controlId={`address1-${addressType.toLowerCase()}`}>
        <Form.Control placeholder='Address' />
      </Form.Group>

      <Form.Group className='mb-3' controlId={`address2-${addressType.toLowerCase()}`}>
        <Form.Control placeholder='Address Line 2 (optional)' />
      </Form.Group>

      <Form.Group className='mb-3' controlId={`city-${addressType.toLowerCase()}`}>
        <Form.Control placeholder='City/Region' />
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId={`state-${addressType.toLowerCase()}`}>
          <Form.Control placeholder='State/Province' />
        </Form.Group>

        <Form.Group as={Col} controlId={`zip-${addressType.toLowerCase()}`}>
          <Form.Control placeholder='Zip/Postal Code' />
        </Form.Group>
      </Row>

      <CountryDropdown
        name={`country-${addressType.toLowerCase()}`}
        priorityOptions={['US', 'GB', 'CA']}
        value={addressType === 'Shipping' ? shippingCountry : billingCountry}
        onChange={addressType === 'Shipping' ? (val) => setShippingCountry(val) : (val) => setBillingCountry(val)}
        className='form-select mb-3 form-control'
        id={`country-${addressType.toLowerCase()}`}
      />

      {addressType == 'Shipping' && (
        <Form.Group className='mb-3' controlId='billingSameAsShipping'>
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
        addressType='Shipping'
        shippingEqualsBilling={shippingEqualsBilling}
        toggleBilling={toggleBilling}
      />
      {shippingEqualsBilling === false && (
        <AddressForm
          addressType='Billing'
          shippingEqualsBilling={shippingEqualsBilling}
        />
      )}
    </Card>
  )
}
AddressForm.propTypes = {
  addressType: PropTypes.string.isRequired,
}

ShippingDetails.propTypes = {
  shippingEqualsBilling: PropTypes.bool,
}

ShippingDetails.defaultProps = {
  shippingEqualsBilling: false,
}


export default ShippingDetails
