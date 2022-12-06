import React, { useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap';
import { CountryDropdown } from 'react-country-region-selector';
import PropTypes from 'prop-types'


const AddressDetails = () => {
  const [shippingEqualsBilling, setShippingEqualsBilling] = useState(false)

  const initialvalues = {
    addressName: "",
    address1Shipping: ""
  };
  const [data, setData] = useState(initialvalues);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [country, setCountry] = useState('');

  const toggleBilling = () => {
    setShippingEqualsBilling(!shippingEqualsBilling);
  }

  const AddressForm = ({shippingOrBillingString, shippingOrBillingIndex}) => {
    return (
        <Card.Body>
          <Form>
            {shippingOrBillingString == 'Shipping' && (
              <Form.Group className='mb-5' controlId='address-name' name={`addressName`}>
                <Form.Control placeholder='Address Name' onChange={handleChange} value={data.addressName}/>
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
              //value={getCountryValue(shippingOrBillingIndex)}
              //onChange={(val) => setCountry(shippingOrBillingIndex, val)}
              priorityOptions={['CA', 'US', 'GB']}
              value={country}
              onChange={(val) => setCountry(val)}
              className='form-select mb-3 form-control'
              id={`country-${shippingOrBillingString.toLowerCase()}`}
            />
{/* 
value={this.getCountryValue(13)}
									onChange={(val) => this.selectCountry(13, val)}
									priorityOptions={['CA', 'US', 'GB']} /> */}
  
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
