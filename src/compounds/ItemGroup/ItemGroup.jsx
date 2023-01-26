import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
import Title from '../../components/Title/Title'
import Item from '../Item/Item'
import ItemLoading from '../Item/ItemLoading'
import './item-group.scss'

const ItemGroup = ({ buttonProps, items, isLoading, orientation, withButtonLink, withTitleLink }) => {
  console.log(items)
  return (
  <>
    <Title addClass='mb-2' size='large' title='Featured Services' />
    <Row xs={1} sm={2} className={`g-5 mb-5 ${orientation === 'vertical' && 'row-cols-md-3'}`}>
      {isLoading
        ? (
          <>
            <Col className={`item-${orientation}`}>
              <ItemLoading orientation={orientation} withButtonLink={withButtonLink} />
            </Col>
            <Col className={`item-${orientation}`}>
              <ItemLoading orientation={orientation} withButtonLink={withButtonLink} />
            </Col>
            <Col className={`item-${orientation}`}>
              <ItemLoading orientation={orientation} withButtonLink={withButtonLink} />
            </Col>
            { orientation === 'horizontal' && (
              <Col className={`item-${orientation}`}>
                <ItemLoading orientation={orientation} withButtonLink={withButtonLink} />
              </Col>
            )}
          </>
        ) : (
          items?.map((item) => (
            <Col key={item.id}>
              <Item
                buttonProps={buttonProps}
                item={item}
                orientation={orientation}
                withButtonLink={withButtonLink}
                withTitleLink={withTitleLink}
                href={item.href}
              />
            </Col>
          ))
        )}
    </Row>
  </>
)}

ItemGroup.propTypes = {
  buttonProps: PropTypes.shape({
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string,
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    ...Item.propTypes,
    imgProps: PropTypes.shape({}),
    style: PropTypes.shape({}),
  })),
  isLoading: PropTypes.bool.isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  withButtonLink: PropTypes.bool,
  withTitleLink: PropTypes.bool,
}

ItemGroup.defaultProps = {
  buttonProps: {},
  items: [{}],
  orientation: 'vertical',
  withButtonLink: false,
  withTitleLink: false,
}

export default ItemGroup
