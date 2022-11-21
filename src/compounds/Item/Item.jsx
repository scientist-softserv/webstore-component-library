import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Button from '../../components/Button/Button'
import Image from '../../components/Image/Image'
import ItemLoading from './ItemLoading'
import './item.css'

const Item = React.forwardRef(({ buttonLink, buttonProps, imgProps, isLoading, item, orientation, style, titleLink, withButtonLink, withTitleLink,
  href }, ref) => {
  if (isLoading) {
    return (
      <div className='center-content'>
        <ItemLoading orientation={orientation} />
      </div>
    )
  }

  const { id, description, name } = item
  const { alt, src } = item.img

  // "href" will apply when this component is being rendered from the ItemGroup
  // when rendering this component directly with a button or title link, the corresponding link cannot be an empty string
  if (withButtonLink) buttonLink = buttonLink || href
  if (withTitleLink) titleLink = titleLink || href

  return (
    <article
      className={`item-container item-${orientation} ${orientation === 'horizontal' && 'center-content'}`}
      key={id}
      style={{ ...style }}
    >
      <Image
        className={`item-image item-image-${orientation}`}
        src={src}
        alt={alt}
        {...imgProps}
      />
      <div className={`item-options-${orientation}`}>
        <div className='item-details'>
          {withTitleLink ? (
            <a href={titleLink} ref={ref} className='pointer-cursor link'>
              <h3 className='item-name margin-top'>
                {name}
              </h3>
            </a>
          ) : (
            <h3 className='item-name margin-top'>
              {name}
            </h3>
          )}
          {description && (
            <p className='item-description my-2'>
              {/* TODO(alishaevn): account for really long descriptions */}
              {description}
            </p>
          )}
        </div>
        {withButtonLink && (
          <Link href={buttonLink} passHref legacyBehavior>
            <LinkedButton href={buttonLink} orientation={orientation} buttonProps={buttonProps} />
          </Link>
        )}
      </div>
    </article>
  )
})

const LinkedButton = React.forwardRef(({ buttonProps, href, orientation }, ref) => (
  <a href={href} ref={ref} className={`item-button-${orientation} item-link`}>
    <Button {...buttonProps} />
  </a>
))

Item.propTypes = {
  buttonLink: PropTypes.string,
  // currently overriding the label on a button from being required in this component,
  // because it shouldn't be if we are not rendering a button
  // refer to the comment below
  buttonProps: PropTypes.shape({ ...Button.propTypes, label: PropTypes.string }),
  // TODO(alishaevn): is there a way to set conditional proptypes without adding another package?
  // buttonProps: props => props.withButtonLink
  // 	? PropTypes.shape(Button.propTypes)
  // 	: PropTypes.shape({ ...Button.propTypes, label: PropTypes.string })
  // ,
  isLoading: PropTypes.bool,
  item: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }).isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string,
  }),
  imgProps: PropTypes.shape({}),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.shape({}),
  titleLink: PropTypes.string,
  withButtonLink: PropTypes.bool,
  withTitleLink: PropTypes.bool,
}

Item.defaultProps = {
  buttonLink: '',
  buttonProps: Button.defaultProps,
  imgProps: {},
  isLoading: false,
  item: {
    description: '',
  },
  orientation: 'vertical',
  style: {},
  titleLink: '',
  withButtonLink: false,
  withTitleLink: false,
}

export default Item
