import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import './link.css'

const Link = ({ addClass, href, icon, label, style, ...props }) => (
  <a
    href={href}
    className={`link ${addClass}`}
    style={style}
    {...props}
  >
    {icon && (
      <FontAwesomeIcon icon={icon} className={`small ${label.length > 0 && 'me-2'}`} />
    )}
    {label}
  </a>
)

Link.propTypes = {
  addClass: PropTypes.string,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.shape({}),
}

Link.defaultProps = {
  addClass: '',
  icon: '',
  label: '',
  style: {},
}

export default Link
