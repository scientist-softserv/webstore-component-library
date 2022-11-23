import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import Item from '../Item/Item'
import ItemLoading from '../Item/ItemLoading'
import './item-group.css'

const ItemGroup = ({ buttonProps, imgProps, items, isLoading, orientation, style, withButtonLink, withTitleLink }) => (
  <section className='item-group center-content'>
    <Title addClass='mb-2' size='large' title='Featured Services' />
    <div className='group-container'>
      {isLoading ?
        (
          <ItemLoading orientation={orientation} />
        ) : (
          items.map((item) => (
            // TODO(alishaevn): is there a way to hide the id from the url?
            // adding "as={`${item.href}`}" as a Link prop removed the id from the query entirely
            <Link key={item.id} href={{ pathname: `${item.href}`, query: { id: `${item.id}` } }} passHref legacyBehavior>
              <Item
                buttonProps={buttonProps}
                imgProps={imgProps}
                item={item}
                orientation={orientation}
                style={style}
                withButtonLink={withButtonLink}
                withTitleLink={withTitleLink}
              />
            </Link>
          ))
        )
      }
    </div>
  </section>
)

ItemGroup.propTypes = {
  buttonProps: PropTypes.shape({
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string,
  }),
  imgProps: PropTypes.shape({}),
  items: PropTypes.arrayOf(PropTypes.shape({
    ...Item.propTypes,
    imgProps: PropTypes.shape({}),
    style: PropTypes.shape({}),
  })).isRequired,
  isLoading: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.shape({}),
  withButtonLink: PropTypes.bool,
  withTitleLink: PropTypes.bool,
}

export default ItemGroup
