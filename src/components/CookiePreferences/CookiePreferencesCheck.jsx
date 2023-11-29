import React from 'react'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import { useState } from 'react'

const CookiePreferencesCheck = ({ cookieConsentValue, disableCookies, enableCookies }) => {
  // NOTE: the enable/disable cookies functions change the actual value.
  // the state variable below is so the radio buttons update after being clicked.
  // NOTE: cookie values are strings. we are parsing it in state so we don't have to
  // do strict evaluations (===) with strings in the code below.
  const [allowed, setAllowed] = useState(JSON.parse(cookieConsentValue))

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
  cookieConsentValue: PropTypes.string.isRequired,
  disableCookies: PropTypes.func.isRequired,
  enableCookies: PropTypes.func.isRequired,
}

export default CookiePreferencesCheck
