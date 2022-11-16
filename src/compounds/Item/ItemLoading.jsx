import React from 'react'
import PropTypes from 'prop-types'
import './item.css'

const ItemLoading = ({ orientation }) => (
  <>
    <article className={`item-container item-${orientation} is-loading`} />
    <article className={`item-container item-${orientation} is-loading`} />
    <article className={`item-container item-${orientation} is-loading`} />
  </>
)

ItemLoading.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
}

ItemLoading.defaultProps = {
  orientation: 'vertical',
}

export default ItemLoading
