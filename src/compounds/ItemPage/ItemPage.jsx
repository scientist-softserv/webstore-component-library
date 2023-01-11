import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'react-bootstrap'
import Image from '../../components/Image/Image'
import Title from '../../components/Title/Title'

const ItemPage = ({ title, titleStyle, description, descriptionStyle, img }) => {
  // sets a default width while still allowing width to be overridden
  img = { width: 400, ...img }

  return (
    <main className='container py-5'>
      <Title title={title} style={titleStyle} addClass='text-center text-md-start' />
      <Row className='mt-3'>
        <Col xs={12} md={6} className='text-center text-md-start d-flex flex-column'>
          {description}
          {/* TODO(summer-cook): Update this button's href so it is pointing at the item's form instead of blank request form */}
          <Button href='/requests/new' className='mt-4 align-self-center align-self-md-start'>Initiate Request</Button>
        </Col>
        <Col xs={12} md={6} className='mt-4 mt-md-0 me-md-auto d-flex justify-content-center justify-content-md-end'>
          <Image {...img} />
        </Col>
      </Row>
    </main>
  )
}

ItemPage.propTypes = {
  description: PropTypes.string.isRequired,
  descriptionStyle: PropTypes.shape({}),
  img: Image.defaultProps.isRequired,
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.shape({}),
}

ItemPage.defaultProps = {
  descriptionStyle: {},
  titleStyle: {},
}

export default ItemPage
