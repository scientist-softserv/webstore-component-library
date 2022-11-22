import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../../components/Badge/Badge'
import TextBox from '../../components/TextBox/TextBox'
import Title from '../../components/Title/Title'
import './request-item.css'

const RequestItem = React.forwardRef(({ createdAt, description, href, title, status, updatedAt, user }, ref) => {
  const { backgroundColor, text, textColor } = status
  const textBoxStyling = {
    backgroundColor: user.backgroundColor,
    height: 70,
    width: 70,
    lineHeight: '70px',
    fontSize: 28,
    color: user.textColor,
  }

  return (
    <article className='request-item margin-top'>
      <TextBox text={user.name} alignment='center' style={textBoxStyling} />
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
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    backgroundColor: PropTypes.string,
    name: PropTypes.string.isRequired,
    textColor: PropTypes.string,
  }).isRequired,
  status: PropTypes.shape(Badge.propTypes).isRequired,
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
}

export default RequestItem
