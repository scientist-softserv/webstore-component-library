import React, { useState } from 'react'
import {
  Card,
  Col,
  Form,
  Row,
} from 'react-bootstrap'
import { CountryDropdown } from 'react-country-region-selector'
import PropTypes from 'prop-types'

const AddressForm = ({ addressType, billingCountry, shippingCountry, setShowBilling,
  showBilling, updateRequestForm }) => {
  const handleChange = (value) => {
    updateRequestForm(value, 'billingSameAsShipping')
  }

  return (
    <Card.Body>
      {/* TODO(alishaevn): decide if we will keep this based on the api endpoint */}
      {/* {addressType == 'Shipping' && (
        <Form.Group className='mb-5' controlId='address-name'>
          <Form.Control placeholder='Address Name' name='addressName'/>
        </Form.Group>
      )} */}
      <Card.Title className='mb-3'>{addressType.charAt(0).toUpperCase() + addressType.slice(1)} Address</Card.Title>

      <Form.Group className='mb-3' controlId={`address1-${addressType}`}>
        <Form.Control
          placeholder='Address'
          onChange={(e) => updateRequestForm(e.target.value, `${addressType}.street`)}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId={`address2-${addressType}`}>
        <Form.Control
          placeholder='Address Line 2 (optional)'
          onChange={(e) => updateRequestForm(e.target.value, `${addressType}.street2`)}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId={`city-${addressType}`}>
        <Form.Control
          placeholder='City/Region'
          onChange={(e) => updateRequestForm(e.target.value, `${addressType}.city`)}
        />
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId={`state-${addressType}`}>
          <Form.Control
            placeholder='State/Province'
            onChange={(e) => updateRequestForm(e.target.value, `${addressType}.state`)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId={`zip-${addressType}`}>
          <Form.Control
            placeholder='Zip/Postal Code'
            onChange={(e) => updateRequestForm(e.target.value, `${addressType}.zipCode`)}
          />
        </Form.Group>
      </Row>

      <CountryDropdown
        name={`country-${addressType}`}
        priorityOptions={['US', 'GB', 'CA']}
        value={addressType === 'shipping' ? shippingCountry : billingCountry}
        onChange={(e) => updateRequestForm(e, `${addressType}.country`)}
        className='form-select mb-3 form-control'
        id={`country-${addressType}`}
      />

      {addressType === 'shipping' && (
        <Form.Group className='mb-3' controlId='billingSameAsShipping'>
          <Form.Check
            type='checkbox'
            label='My shipping address is the same as my billing address.'
            onChange={() => {
              setShowBilling(!showBilling)
              if (showBilling) handleChange(true)
            }}
          />
        </Form.Group>
      )}
    </Card.Body>
  )
}

const ShippingDetails = ({ billingCountry, shippingCountry, updateRequestForm }) => {
  const [showBilling, setShowBilling] = useState(true)

  return (
    <Card className='mb-4'>
      <Card.Header className='h3'>Shipping Details</Card.Header>
      <AddressForm
        addressType='shipping'
        billingCountry={billingCountry}
        shippingCountry={shippingCountry}
        showBilling={showBilling}
        setShowBilling={setShowBilling}
        updateRequestForm={updateRequestForm}
      />
      {showBilling && (
        <AddressForm
          addressType='billing'
          billingCountry={billingCountry}
          shippingCountry={shippingCountry}
          updateRequestForm={updateRequestForm}
        />
      )}
    </Card>
  )
}

AddressForm.propTypes = {
  addressType: PropTypes.string.isRequired,
  billingCountry: PropTypes.string.isRequired,
  showBilling: PropTypes.bool,
  setShowBilling: PropTypes.func,
  shippingCountry: PropTypes.string.isRequired,
  updateRequestForm: PropTypes.func.isRequired,
}

ShippingDetails.propTypes = {
  billingCountry: PropTypes.string.isRequired,
  shippingCountry: PropTypes.string.isRequired,
  updateRequestForm: PropTypes.func.isRequired,
}

AddressForm.defaultProps = {
  showBilling: false,
  setShowBilling: () => {},
}

export default ShippingDetails
