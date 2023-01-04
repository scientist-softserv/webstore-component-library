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
          name="address1"
          type='text'
          required
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please enter your address.
        </Form.Control.Feedback>
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
          type='text'
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter your city or region.
        </Form.Control.Feedback>
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId={`state-${addressType}`}>
          <Form.Control
            placeholder='State/Province'
            onChange={(e) => updateRequestForm(e.target.value, `${addressType}.state`)}
            type='text'
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter your state or province.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId={`zip-${addressType}`}>
          <Form.Control
            placeholder='Zip/Postal Code'
            onChange={(e) => updateRequestForm(e.target.value, `${addressType}.zipCode`)}
            type='text'
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter your zip or postal code.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* // TODO(summercook):- get the validation message for country to work */}
      <CountryDropdown
        name={`country-${addressType}`}
        priorityOptions={['US', 'GB', 'CA']}
        value={addressType === 'shipping' ? shippingCountry : billingCountry}
        onChange={(e) => updateRequestForm(e, `${addressType}.country`)}
        className='form-select mb-3 form-control'
        id={`country-${addressType}`}
        required
      />
      <Form.Control.Feedback type="invalid">
        Please select a country.
      </Form.Control.Feedback>

      {addressType === 'shipping' && (
        <Form.Group className='mb-3' controlId='billingSameAsShipping'>
          <Form.Check
            type='checkbox'
            label='My shipping address is the same as my billing address.'
            onChange={() => {
              setShowBilling(!showBilling)
              if (showBilling) handleChange(true)
              if (!showBilling) handleChange(false)
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
