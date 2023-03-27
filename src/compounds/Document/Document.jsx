import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Offcanvas } from 'react-bootstrap'
import LineItemsTable from '../../components/LineItemsTable/LineItemsTable'
import { allowNull } from '../../resources/utilityFunctions'
import './document.scss'

const Document = ({ acceptSOW, addClass, backgroundColor, document }) => {
  const {
    adPO, date, documentStatusColor, documentType, documentTypeColor, documentStatus, identifier, lineItems, poNumber,
    relatedSOWIdentifier, requestIdentifier, shippingPrice, shipTo, shipFrom, subtotalPrice, taxAmount, terms, totalPrice,
    turnaroundTime,
  } = document
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
            <b>{(documentType === 'SOW') ? identifier : poNumber}:</b> {subtotalPrice}
          </div>
          <small className='text-muted fw-light p-2'>
            {date}
          </small>
        </div>
        <div className='ms-auto p-2'>
          <div className='badge p-2' style={{ backgroundColor: documentStatusColor }}>
            {documentStatus}
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement='end' scroll='true'>
        <Offcanvas.Header className={`d-flex border-bottom px-3 py-2 bg-${backgroundColor}-8`} closeButton>
          <Offcanvas.Title> {documentType}: #{identifier}</Offcanvas.Title>
          {documentType === 'SOW'
            && (
              <div className='ms-auto me-2'>
                <Dropdown>
                  <Dropdown.Toggle id='next-actions-dropdown' size='small' className='btn-outline-dark' variant={`btn-${backgroundColor}`}>
                    Next Actions
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href='#/accept-sow'
                      onClick={() => {
                        acceptSOW()
                        handleClose()
                      }}
                    >
                      Accept SOW
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='d-block d-md-flex justify-content-between'>
            <div className='details'>
              <h5>Details:</h5>
              {poNumber && <><b>PO:</b> {poNumber}<br /></>}
              {adPO && <><b>AD PO:</b> {identifier}<br /></>}
              {documentType === 'SOW'
                ? <><b>Proposal:</b> {identifier}</>
                : <><b>Related SOW:</b> {relatedSOWIdentifier}</>}<br />
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
          {lineItems && (
            <LineItemsTable
              lineItems={lineItems}
              subtotalPrice={subtotalPrice}
              taxAmount={taxAmount}
              shippingPrice={shippingPrice}
              totalPrice={totalPrice}
            />
          )}
          {turnaroundTime && <h5><b>Turnaround Time:</b> {turnaroundTime}</h5>}
        </Offcanvas.Body>
      </Offcanvas>
    </>

  )
}

Document.propTypes = {
  addClass: PropTypes.string,
  backgroundColor: PropTypes.string,
  acceptSOW: PropTypes.func.isRequired,
  document: PropTypes.shape({
    adPO: PropTypes.string,
    identifier: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    documentStatus: PropTypes.string.isRequired,
    documentStatusColor: PropTypes.string,
    documentType: PropTypes.string.isRequired,
    documentTypeColor: PropTypes.string,
    lineItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    poNumber: PropTypes.string,
    relatedSOWIdentifier: PropTypes.string,
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
    sowID: allowNull(PropTypes.string),
    subtotalPrice: PropTypes.string.isRequired,
    taxAmount: PropTypes.string.isRequired,
    terms: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    turnaroundTime: PropTypes.string,
  }),
}

Document.defaultProps = {
  addClass: '',
  backgroundColor: 'secondary',
  document: {
    documentTypeColor: 'bg-dark',
    documentStatusColor: 'bg-secondary',
  },
}

export default Document
