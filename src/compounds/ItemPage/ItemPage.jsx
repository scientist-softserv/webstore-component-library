import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/Image/Image'
import TextBox from '../../components/TextBox/TextBox'
import Title from '../../components/Title/Title'
import './item-page.css'

const ItemPage = ({ title, titleStyle, description, descriptionStyle, img }) => {
  // sets a default width while still allowing width to be overridden
  img = { width: 400, ...img }

  return (
    <main className='center-content'>
      <Title title={title} style={titleStyle} />
      <div className='item-page-details'>
        <TextBox text={description} style={descriptionStyle} size='medium' />
        <Image {...img} />
      </div>
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
