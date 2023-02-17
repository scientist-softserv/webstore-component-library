import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../../components/Badge/Badge'
import Image from '../../components/Image/Image'
import TextBox from '../../components/TextBox/TextBox'
import Title from '../../components/Title/Title'
import './request-item.scss'

const RequestItem = React.forwardRef(({ backgroundColor, index, request }, ref) => {
  const { createdAt, description, href, img, title, status, updatedAt } = request
  const { text, textColor } = status
  const image = { ...img, height: 70, width: 70 }
  const bg = index % 2 === 0 ? `bg-${backgroundColor}` : `bg-${backgroundColor}-1`

  return (
    <article
      className={`request-item p-3 d-flex flex-column flex-md-row justify-content-between gap-3 ${bg}`}
    >
      <div className='d-flex flex-column flex-sm-row gap-3 request-item-details'>
        <Image {...image} addClass='align-self-md-center' />
        <div className='align-self-sm-center'>
          <a href={href} ref={ref} className='link pointer-cursor'>
            <Title title={title} size='small' />
          </a>
          <TextBox text={description} />
        </div>
      </div>
      <div className={`status bg-${backgroundColor}-3 p-2 rounded mt-4 mt-md-0`}>
        <Badge
          backgroundColor={status.backgroundColor}
          text={text}
          textColor={textColor}
          addClass='mb-2'
        />
        <TextBox text={`Created: ${createdAt}`} />
        <TextBox text={`Updated: ${updatedAt}`} />
      </div>
    </article>
  )
})

export const requestPropTypes = {
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  img: PropTypes.shape(Image.propTypes).isRequired,
  status: PropTypes.shape(Badge.propTypes).isRequired,
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
}

RequestItem.propTypes = {
  backgroundColor: PropTypes.string,
  index: PropTypes.number,
  request: PropTypes.shape(requestPropTypes).isRequired,
}

RequestItem.defaultProps = {
  backgroundColor: 'light',
  index: null,
}

RequestItem.displayName = 'Request Item'

export default RequestItem
