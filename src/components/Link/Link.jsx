import React from 'react'
import PropTypes from 'prop-types'
import './link.css'

const Link = ({ addClass, href, label, style, ...props }) => (
  <a
    href={href}
    className={`link ${addClass}`}
    style={style}
    {...props}
  >
    {label}
  </a>
)

Link.propTypes = {
  addClass: PropTypes.string,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
}

Link.defaultProps = {
  addClass: '',
  style: {},
}

export default Link
