import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import Image from '../../components/Image/Image'
import LinkedButton from '../LinkedButton/LinkedButton'
import TextBox from '../../components/TextBox/TextBox'
import Title from '../../components/Title/Title'

const ItemPage = ({ title, titleStyle, description, descriptionStyle, id, img, slug }) => {
  // sets a default width while still allowing width to be overridden
  img = { width: 400, ...img }

  return (
    <main className='container py-5'>
      <Title title={title} style={titleStyle}/>
      <Row className='mt-3'>
        <Col xs={12} md={6} className='d-flex flex-column'>
          <TextBox text={description} style={descriptionStyle} size='medium' />
          <LinkedButton
            addClass='align-self-start mt-4'
            buttonProps={{label: 'Initiate Request'}}
            path={{ pathname: `/requests/new/${slug}`, query: { id }}}
          />
        </Col>
        <Col xs={12} md={6} className='mt-4 mt-md-0 me-md-auto d-flex justify-content-start justify-content-md-end'>
          <Image {...img} />
        </Col>
      </Row>
    </main>
  )
}

ItemPage.propTypes = {
  description: PropTypes.string.isRequired,
  descriptionStyle: PropTypes.shape({}),
  id: PropTypes.number.isRequired,
  img: PropTypes.shape({}),
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.shape({}),
}

ItemPage.defaultProps = {
  descriptionStyle: {},
  titleStyle: {},
}

export default ItemPage
