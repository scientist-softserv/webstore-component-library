import React from 'react'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import { useState } from 'react'

const CookiePreferencesCheck = ({ cookieConsent, disableCookies, enableCookies }) => {
  console.log('CookiePreferencesCheck', { cookieConsent, disableCookies, enableCookies })
  const [allowed, setAllowed] = useState(cookieConsent)

  const handleEnablingCookies = () => {
    enableCookies()
    setAllowed('true')
  }

  const handleDisablingCookies = () => {
    disableCookies()
    setAllowed('false')
  }

  return (
    <Form>
      <Form.Check
        inline
        label='Allow Cookies'
        name='Allow Cookies'
        type='radio'
        id='allow-cookies'
        checked={allowed === 'true'}
        onChange={() => handleEnablingCookies()}
      />
      <Form.Check
        inline
        label='Disable Cookies'
        name='Disable Cookies'
        type='radio'
        id='disable-cookies'
        checked={allowed === 'false'}
        onChange={() => handleDisablingCookies()}
      />
    </Form>
  );
}

CookiePreferencesCheck.propTypes = {
  cookieConsent: PropTypes.string.isRequired,
  disableCookies: PropTypes.func.isRequired,
  enableCookies: PropTypes.func.isRequired,
}

export default CookiePreferencesCheck
