import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import Image from '../../components/Image/Image'
import CardBody from './CardBody'
import LinkedButton from '../LinkedButton/LinkedButton'
import ItemLoading from './ItemLoading'
import NextLink from '../../components/NextLink/NextLink'
import './item.scss'

const Item = ({ buttonLink, buttonProps, markdownDescriptionTruncated, markdownDescriptionExtended, href, isLoading, item, orientation, titleLink, withButtonLink,
  withTitleLink, width }) => {
  if (isLoading) {
    return (
      <>
        <ItemLoading orientation={orientation} width={width} withButtonLink={withButtonLink} />
        <ItemLoading orientation={orientation} width={width} withButtonLink={withButtonLink} />
        <ItemLoading orientation={orientation} width={width} withButtonLink={withButtonLink} />
      </>
    )
  }

  const { id } = item
  const { alt, src } = item.img

  // "href" will apply when this component is being rendered from the ItemGroup
  // when rendering this component directly with a button or title link,
  // the corresponding link cannot be an empty string
  let link
  if (withTitleLink || withButtonLink) link = titleLink || buttonLink || href

  return (
    <Card key={id} style={{ width: `${width}` }} className={`h-100${orientation === 'horizontal' ? ' mb-4' : ''}`} data-cy='item-card'>
      {orientation === 'horizontal' ? (
        <div className='row g-0 h-100'>
          <div className='col-3'>
            <Image
              className={`cover ${orientation === 'horizontal' ? 'img-fluid h-100 rounded-start' : 'card-img-top'}`}
              src={src}
              alt={alt}
            />
          </div>
          <div className='col-9 d-flex align-items-center'>
            <CardBody
              buttonLink={link}
              buttonProps={buttonProps}
              item={item}
              markdownDescriptionTruncated={markdownDescriptionTruncated}
              markdownDescriptionExtended={markdownDescriptionExtended}
              orientation={orientation}
              titleLink={link}
              withButtonLink={withButtonLink}
              withTitleLink={withTitleLink}
            />
          </div>
        </div>
      ) : (
        <NextLink
          children={(
            <>
              <Image
                className={`cover ${orientation === 'horizontal' ? 'img-fluid h-100 rounded-start' : 'card-img-top'}`}
                src={src}
                alt={alt}
              />
              <CardBody
                buttonLink={link}
                buttonProps={buttonProps}
                item={item}
                markdownDescriptionTruncated={markdownDescriptionTruncated}
                markdownDescriptionExtended={markdownDescriptionExtended}
                orientation={orientation}
                titleLink={link}
                withButtonLink={withButtonLink}
                withTitleLink={withTitleLink}
              />
            </>
          )}
          path={{ pathname: item.href, query: { id }}}
          addClass="text-decoration-none link-hover"
        />
      )}
    </Card>
  )
}

export const itemPropTypes = {
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string,
}

Item.propTypes = {
  buttonLink: PropTypes.string,
  // currently overriding the label on a button from being required in this component,
  // because it shouldn't be if we are not rendering a button
  // refer to the comment below
  buttonProps: PropTypes.shape({ ...LinkedButton.propTypes.buttonProps, label: PropTypes.string }),
  // TODO(alishaevn): is there a way to set conditional proptypes without adding another package?
  // buttonProps: props => props.withButtonLink
  // ? PropTypes.shape(Button.propTypes)
  // : PropTypes.shape({ ...Button.propTypes, label: PropTypes.string })
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  isLoading: PropTypes.bool,
  item: PropTypes.shape(itemPropTypes).isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  titleLink: PropTypes.string,
  withButtonLink: PropTypes.bool,
  withTitleLink: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.string, // allows percentages
    PropTypes.number, // uses pixels
  ]),
}

Item.defaultProps = {
  buttonLink: '',
  buttonProps: LinkedButton.defaultProps,
  href: '',
  isLoading: false,
  orientation: 'vertical',
  titleLink: '',
  withButtonLink: false,
  withTitleLink: false,
  width: 'auto',
}

export default Item
