import React from 'react'
import PropTypes from 'prop-types'
import Link from '../../components/Link/Link'
import './link-group.css'

const LinkGroup = ({ header, headerStyle, links, linkStyle }) => (
  <div className='link-group-container'>
    <p className='link-group-header mb-2' style={headerStyle}>{header}</p>
    {links.map(({ name, url }) => <Link href={url} key={name} label={name} addClass='link-group-links' style={linkStyle} />)}
  </div>
)

LinkGroup.propTypes = {
  header: PropTypes.string.isRequired,
  headerStyle: PropTypes.shape({}),
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  linkStyle: PropTypes.shape({}),
}

LinkGroup.defaultProps = {
  headerStyle: {},
  linkStyle: {},
}

export default LinkGroup
