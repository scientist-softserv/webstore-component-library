import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Dropdown from 'react-bootstrap/Dropdown'
import LineItemsTable from '../../components/LineItemsTable/LineItemsTable'
import './document.scss'

const Document = ({ document, addClass }) => {
  const { identifier, date, documentStatusColor, documentType,
    documentTypeColor, documentStatus, lineItems, requestIdentifier,
    shippingPrice, shipTo, shipFrom, subtotalPrice,
    taxAmount, terms, totalPrice } = document
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className={`d-flex border rounded mb-2 bg-light document-wrapper ${addClass}`} onClick={handleShow} role='presentation'>
        <div className='d-flex align-items-center'>
          <div className={`badge p-2 ms-2 div-uppercase ${documentTypeColor}`}>
            {documentType}
          </div>
          <div className='border-end p-2'>
            <b>{identifier}:</b> {subtotalPrice}
          </div>
          <small className='text-muted fw-light p-2'>
            {date}
          </small>
        </div>
        <div className='ms-auto p-2'>
          <div className='badge p-2' style={{backgroundColor: documentStatusColor}}>
            {documentStatus}
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement='end' scroll='true'>
        <Offcanvas.Header className='d-flex' closeButton>
          <Offcanvas.Title> {documentType}: #{identifier}</Offcanvas.Title>
          <div className='ms-auto me-2'>
            <Dropdown>
              <Dropdown.Toggle variant='light' id='dropdown-basic' size='small' className='border'>
                Next Actions
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* TODO: @summer-cook Update this menu item so it submits this document for approval &
                add more dropdown items depending on what actions we need here. */}
                <Dropdown.Item href='#/action-1'>Submit for Approval</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='d-block d-md-flex justify-content-between'>
            <div className='details'>
              <h6>Details:</h6>
              <b>Proposal:</b> {identifier}<br />
              <b>Amount:</b> {subtotalPrice}<br />
              <b>Request:</b> {requestIdentifier} <br />
              <b>Date:</b> {date}<br />
              <b>Payment Terms:</b> {terms}<br />
              <b>Status:</b> {documentStatus}<br />
            </div>
            <div className='ship-to mt-5 mt-md-0'>
              <h6>Ship to:</h6>
              {shipTo.organizationName}<br />
              <div className='address'>{shipTo.text}</div>
            </div>
            <div className='ship-from mt-5 mt-md-0'>
              <h6>Ship From:</h6>
              {shipFrom.organizationName}<br />
              <div className='address'>{shipFrom.text}</div>
            </div>
          </div>
          {lineItems
          && (
            <LineItemsTable
              lineItems={lineItems}
              subtotalPrice={subtotalPrice}
              taxAmount={taxAmount}
              shippingPrice={shippingPrice}
              totalPrice={totalPrice}
            />
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>

  )
}

Document.propTypes = {
  addClass: PropTypes.string,
  document: PropTypes.shape({
    identifier: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    documentStatus: PropTypes.string.isRequired,
    documentStatusColor: PropTypes.string,
    documentType: PropTypes.string.isRequired,
    documentTypeColor: PropTypes.string,
    lineItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    requestIdentifier: PropTypes.string.isRequired,
    shippingPrice: PropTypes.string.isRequired,
    shipTo: PropTypes.shape({
      organizationName: PropTypes.string,
      text: PropTypes.string,
    }).isRequired,
    shipFrom: PropTypes.shape({
      organizationName: PropTypes.string,
      text: PropTypes.string,
    }).isRequired,
    subtotalPrice: PropTypes.string.isRequired,
    taxAmount: PropTypes.string.isRequired,
    terms: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }),
}

Document.defaultProps = {
  addClass: '',
  document: {
    documentTypeColor: 'bg-dark',
    documentStatusColor: 'bg-secondary',
  },
}

export default Document
