import React from 'react'
import PropTypes from 'prop-types'
import './item.scss'

const ItemLoading = ({ orientation }) => (
  <>
    <article className={`item-container item-${orientation} is-loading`}></article>
    <article className={`item-container item-${orientation} is-loading`}></article>
    <article className={`item-container item-${orientation} is-loading`}></article>
  </>
)

ItemLoading.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
}

ItemLoading.defaultProps = {
  orientation: 'vertical',
}

export default ItemLoading
