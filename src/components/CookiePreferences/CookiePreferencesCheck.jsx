import React from 'react'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import { useState } from 'react'

const CookiePreferencesCheck = ({ cookieConsentValue, disableCookies, enableCookies }) => {
  // NOTE: the enable/disable cookies functions change the actual value.
  // the variable below is so the radio buttons update after being clicked.
  const [allowed, setAllowed] = useState(cookieConsentValue)

  const handleEnablingCookies = () => {
    enableCookies()
    setAllowed(true)
  }

  const handleDisablingCookies = () => {
    disableCookies()
    setAllowed(false)
  }

  return (
    <Form>
      <Form.Check
        inline
        label='Allow Cookies'
        name='Allow Cookies'
        type='radio'
        id='allow-cookies'
        checked={allowed}
        onChange={() => handleEnablingCookies()}
      />
      <Form.Check
        inline
        label='Disable Cookies'
        name='Disable Cookies'
        type='radio'
        id='disable-cookies'
        checked={!allowed}
        onChange={() => handleDisablingCookies()}
      />
    </Form>
  );
}

CookiePreferencesCheck.propTypes = {
  cookieConsentValue: PropTypes.bool.isRequired,
  disableCookies: PropTypes.func.isRequired,
  enableCookies: PropTypes.func.isRequired,
}

export default CookiePreferencesCheck
