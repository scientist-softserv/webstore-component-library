import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

const CookiePreferencesModal = ({ cookieConsent, disableCookies, enableCookies }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleEnablingCookies = () => {
    enableCookies()
    handleClose()
  }

  const handleDisablingCookies = () => {
    disableCookies()
    handleClose()
  }

  if (!show && (cookieConsent === undefined)) return handleShow()

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Cookie Preferences</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please provide your consent below to our use of non-essential cookies on our site.
        You may withdraw your consent at any point by visiting our <Link href='legal-notices/cookie-policy'>Cookie Policy</Link> page.
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={handleEnablingCookies}>
          Allow Cookies
        </Button>
        <Button variant='secondary' onClick={handleDisablingCookies}>
          Disable Cookies
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

CookiePreferencesModal.propTypes = {
  cookieConsent: PropTypes.string.isRequired,
  disableCookies: PropTypes.func.isRequired,
  enableCookies: PropTypes.func.isRequired,
}

export default CookiePreferencesModal
