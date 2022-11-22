import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../../components/Badge/Badge'
import Image from '../../components/Image/Image'
import TextBox from '../../components/TextBox/TextBox'
import Title from '../../components/Title/Title'
import './request-item.css'

const RequestItem = React.forwardRef(({ createdAt, description, href, img, title, status, updatedAt }, ref) => {
  const { backgroundColor, text, textColor } = status
  const image = { ...img, height: 70, width: 70 }

  return (
    <article className='request-item mt-2'>
      <Image {...image} />
      <div className='request-item-details'>
        <a href={href} ref={ref} className='link pointer-cursor'>
          <Title title={title} size='small' />
        </a>
        <TextBox text={description} />
      </div>
      <div className='status'>
        <Badge
          backgroundColor={backgroundColor}
          text={text}
          textColor={textColor}
        />
        <TextBox text={`Created: ${createdAt}`} />
        <TextBox text={`Updated: ${updatedAt}`} />
      </div>
    </article>
  )
})

RequestItem.propTypes = {
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number,
  img: PropTypes.shape(Image.propTypes).isRequired,
  status: PropTypes.shape(Badge.propTypes).isRequired,
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
}

export default RequestItem
