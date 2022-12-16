import React from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table'

const LineItemsTable = (props) => {
  const { addClass, lineItems, shippingPrice, subtotalPrice, taxAmount, totalPrice } = props

  return (
    <Table striped bordered hover size='sm' className={`mt-5 ${addClass}`}>
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Item Name</th>
          <th>Unit Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {lineItems.map((item) => {
          const { quantity, name, unitPrice, subtotal } = item
          return (
            <tr key={name}>
              <td>{quantity}</td>
              <td>{name}</td>
              <td>{unitPrice}</td>
              <td>{subtotal}</td>
            </tr>
          )
        })}
        <tr>
          <td colSpan={3} className='text-end fw-bold'>Subtotal</td>
          <td>{subtotalPrice}</td>
        </tr>
        <tr>
          <td colSpan={3} className='text-end fw-bold'>Tax Amount</td>
          <td>{taxAmount}</td>
        </tr>
        <tr>
          <td colSpan={3} className='text-end fw-bold'>Shipping & Handling</td>
          <td>{shippingPrice}</td>
        </tr>
        <tr>
          <td colSpan={3} className='text-end fw-bold'>Total</td>
          <td>{totalPrice}</td>
        </tr>
      </tbody>
    </Table>
  )
}

LineItemsTable.propTypes = {
  addClass: PropTypes.string,
  lineItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  shippingPrice: PropTypes.string.isRequired,
  subtotalPrice: PropTypes.string.isRequired,
  taxAmount: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
}

LineItemsTable.defaultProps = {
  addClass: '',
}

export default LineItemsTable
