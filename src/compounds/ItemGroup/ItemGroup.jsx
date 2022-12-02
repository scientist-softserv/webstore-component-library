import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
import Item from '../Item/Item'
import ItemLoading from '../Item/ItemLoading'
import './item-group.css'

const ItemGroup = ({ buttonProps, imgProps, items, isLoading, orientation, style, withButtonLink, withTitleLink }) => (
  <Row xs={1} sm={2} className={`g-5 mb-5 ${orientation == 'vertical' && 'row-cols-md-3'}`}>
      {isLoading ?
        (
          <ItemLoading orientation={orientation} />
        ) : (
          items.map((item) => (
            //TODO: Figure out how to add the Next Link back. It may need to be on the item and not the itemgroup
        <Col>
            <Item
                buttonProps={buttonProps}
                imgProps={imgProps}
                item={item}
                orientation={orientation}
                style={style}
                withButtonLink={withButtonLink}
                withTitleLink={withTitleLink}
              />
        </Col>
      ))
    )}
  </Row>
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
  orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  style: PropTypes.shape({}),
  withButtonLink: PropTypes.bool,
  withTitleLink: PropTypes.bool,
}

ItemGroup.defaultProps = {
  orientation: 'vertical',
  withButtonLink: false,
  withTitleLink: false,
}

export default ItemGroup
