import React from 'react'
import PropTypes from 'prop-types'
import { Card, Placeholder } from 'react-bootstrap'
import './item.scss'

const CardBodyLoading = ({ withButtonLink }) => (
  <Card.Body className={withButtonLink && 'd-flex flex-column'}>
    <Placeholder as={Card.Title} animation='glow'>
      <Placeholder xs={6} />
    </Placeholder>
    <Placeholder as={Card.Text} animation='glow'>
      <Placeholder xs={7} />
      <Placeholder xs={4} />
      <Placeholder xs={4} />{' '}
      <Placeholder xs={6} />
      <Placeholder xs={8} />
    </Placeholder>
    {withButtonLink && (
      <Placeholder.Button variant='secondary' xs={6} animation='glow'>
          &nbsp;
      </Placeholder.Button>
    )}
  </Card.Body>
)

const ItemLoading = ({ orientation, width, withButtonLink }) => (
  orientation === 'horizontal' ? (
    <Card style={{ width }} className='h-100 mb-4'>
      <div className='row g-0 h-100'>
        <div className='col-3 bg-secondary' />
        <div className='col-9 d-flex align-items-center'>
          <CardBodyLoading withButtonLink={withButtonLink} />
        </div>
      </div>
    </Card>
  ) : (
    <Card className='w-100 item-vertical'>
      <div className='h-100 bg-secondary' />
      <CardBodyLoading withButtonLink={withButtonLink} />
    </Card>
  )
)

CardBodyLoading.propTypes = {
  withButtonLink: PropTypes.bool,
}

CardBodyLoading.defaultProps = {
  withButtonLink: false,
}

ItemLoading.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  width: PropTypes.oneOfType([
    PropTypes.string, // allows percentages
    PropTypes.number, // uses pixels
  ]),
}

ItemLoading.defaultProps = {
  orientation: 'vertical',
  width: 'auto',
}

export default ItemLoading
