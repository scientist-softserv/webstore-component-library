import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/card';
import Image from '../../components/Image/Image'
import Link from '../../components/Link/Link'
import NextLink from '../../components/NextLink/NextLink'
import LinkedButton from '../LinkedButton/LinkedButton'
import ItemLoading from './ItemLoading';
import './item.scss'

const Item = ({ buttonLink, buttonProps, fromItemGroup, isLoading, item, orientation, titleLink, withButtonLink, withTitleLink, href, width }) => {
  if (isLoading) {
    return (
      <ItemLoading orientation={orientation} />
    )
  }

  const { id, description, name } = item
  const { alt, src } = item.img
  // "href" will apply when this component is being rendered from the ItemGroup
  // when rendering this component directly with a button or title link, the corresponding link cannot be an empty string
  if (withButtonLink) buttonLink = buttonLink || href
  if (withTitleLink) titleLink = titleLink || href
  console.log(titleLink)
  
  const CardBody = () => {
    return (
      <Card.Body className={withButtonLink && 'd-flex flex-column'}>
        <Card.Title>
        {(withTitleLink && fromItemGroup) && (
          <NextLink
            text={name}
            path={{ pathname: `${titleLink}`, query: { id: `${id}` } }} addClass="text-decoration-none"
          />
        )}
        {(withTitleLink && !fromItemGroup) && (
          <Link label={name} addClass={'text-decoration-none'} href={titleLink}/>
        )}
        {(!withTitleLink) && (
          name
        )}
        </Card.Title>
      {description && 
        <Card.Text className='fw-light'>
          {description}
        </Card.Text>
      }
      {(withButtonLink) && (
        <LinkedButton
          addClass={`item-button-${orientation} item-link mt-auto`}
          buttonProps={buttonProps}
          path={fromItemGroup ? { pathname: `${buttonLink}`, query: { id: `${id}` } } : buttonLink}
        />
      )}
      </Card.Body>
    )
  }

  return (
    <Card key={id} style={{ width: `${width}` }} className='h-100'>
      {orientation === 'horizontal' ? (
        <div className='row g-0 h-100'>
          <div className='col-4'>
            <Image 
              className={orientation === 'horizontal' ? 'img-fluid h-100 rounded-start cover' : 'card-img-top'}
              src={src}
              alt={alt}
            />
          </div>
          <div className='col-8 d-flex align-items-center'>
            <CardBody/>
          </div>
        </div>
      ) : (
        <>
          <Image
            className={orientation === 'horizontal' ? 'img-fluid h-100 rounded-start cover' : 'card-img-top'}
            src={src}
            alt={alt}
          />
          <CardBody/>
        </>
      )}
    </Card>
  )
}

Item.propTypes = {
  buttonLink: PropTypes.string,
  // currently overriding the label on a button from being required in this component,
  // because it shouldn't be if we are not rendering a button
  // refer to the comment below
  buttonProps: PropTypes.shape({ ...LinkedButton.propTypes.buttonProps, label: PropTypes.string }),
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
  fromItemGroup: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.shape({}),
  titleLink: PropTypes.string,
  withButtonLink: PropTypes.bool,
  withTitleLink: PropTypes.bool,
  width: PropTypes.string
}

Item.defaultProps = {
  buttonLink: '',
  buttonProps: LinkedButton.defaultProps,
  fromItemGroup: false,
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
  width: '',
}

export default Item
