import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import Image from '../../components/Image/Image'
import LinkedButton from '../LinkedButton/LinkedButton'
import TextBox from '../../components/TextBox/TextBox'
import Title from '../../components/Title/Title'

const ItemPage = ({ descriptionStyle, img, titleStyle, ware }) => {
  const { description, id, name, snippet, slug } = ware
  // sets a default width while still allowing width to be overridden
  const styledImg = { width: 400, ...img }

  return (
    <main className='container py-5'>
      <Title title={name} style={titleStyle} />
      <Row className='mt-3'>
        <Col xs={12} md={6} className='d-flex flex-column'>
          <TextBox text={description || snippet} style={descriptionStyle} size='medium' />
          <LinkedButton
            addClass='align-self-start mt-4'
            buttonProps={{ label: 'Initiate Request' }}
            path={{ pathname: `/requests/new/${slug}`, query: { id } }}
          />
        </Col>
        <Col xs={12} md={6} className='mt-4 mt-md-0 me-md-auto d-flex justify-content-start justify-content-md-end'>
          <Image {...styledImg} addClass='img-fluid' />
        </Col>
      </Row>
    </main>
  )
}

ItemPage.propTypes = {
  descriptionStyle: PropTypes.shape({}),
  img: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  titleStyle: PropTypes.shape({}),
  ware: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

ItemPage.defaultProps = {
  descriptionStyle: {},
  titleStyle: {},
}

export default ItemPage
