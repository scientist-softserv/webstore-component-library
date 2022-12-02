import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/card';
import LinkedButton from '../LinkedButton/LinkedButton'
import ItemLoading from './ItemLoading';
import './item.scss'

const Item2 = React.forwardRef(({ buttonLink, buttonProps, isLoading, item, orientation, titleLink, withButtonLink, withTitleLink, href, width }, ref) => {
  if (isLoading) {
    return (
      <ItemLoading orientation={orientation} />
    )
  }

  const { id, description, name } = item
  const { alt, src } = item.img

  const CardImg = () => {
    return (
      <img 
        className={orientation === 'horizontal' ? 'img-fluid h-100 rounded-start cover' : 'card-img-top'}
        src={src}
        alt={alt}
      />
    )
  }

  const CardBody = () => {
    return (
      <Card.Body>
      {withTitleLink ? (
        <Card.Title>
          <a className='text-decoration-none pointer-cursor' href={titleLink} ref={ref}>
            {name}
          </a>
        </Card.Title>
      ) : (
        <Card.Title>
          {name}
        </Card.Title>
      )}
      {description && 
        <Card.Text className='fw-light'>
          {description}
        </Card.Text>
      }
      {withButtonLink && (
        <LinkedButton
          addClass={`item-button-${orientation} item-link`}
          buttonProps={buttonProps}
          path={buttonLink}
        />
      )}
      </Card.Body>
    )
  }

  // "href" will apply when this component is being rendered from the ItemGroup
  // when rendering this component directly with a button or title link, the corresponding link cannot be an empty string
  //if (withButtonLink) buttonLink = buttonLink || href
  if (withTitleLink) titleLink = titleLink || href

  return (
    <Card key={id} style={{ width: `${width}` }}>
      {orientation === 'horizontal' ? (
        <div className='row g-0'>
          <div className='col-4'>
            <CardImg/>
          </div>
          <div className='col-8 d-flex align-items-center'>
            <CardBody/>
          </div>
        </div>
      ) : (
        <>
          <CardImg/>
          <CardBody/>
        </>
      )}
    </Card>
  )
})

Item2.propTypes = {
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
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.shape({}),
  titleLink: PropTypes.string,
  withButtonLink: PropTypes.bool,
  withTitleLink: PropTypes.bool,
  width: PropTypes.string
}

Item2.defaultProps = {
  buttonLink: '',
  buttonProps: LinkedButton.defaultProps,
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

export default Item2
