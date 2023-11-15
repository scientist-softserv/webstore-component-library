import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import './link.css'

const Link = ({ addClass, href, icon, label, style, target, ...props }) => {
  return (
    <a
      href={href}
      className={`link ${addClass}`}
      style={style}
      target={target}
      {...props}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className={`small ${label.length && 'me-2'}`} />
      )}
      {label && label}
    </a>
  )
}

/**
 * there isn't an easy way to require either the icon OR the label. there are additional packages we could install that have the
 * capability, but that would bloat the package unnecessarily. instead, we're requiring that the label be passed. the overwhelming
 * majority of instances where a link is used, will want a label anyway. however, in the event a label isn't desired, passing the
 * value as an empty string will satisfy prop types, while still only showing an icon.
*/
Link.propTypes = {
  addClass: PropTypes.string,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
  target: PropTypes.string,
}

Link.defaultProps = {
  addClass: '',
  icon: '',
  style: {},
  target: '_self'
}

export default Link
