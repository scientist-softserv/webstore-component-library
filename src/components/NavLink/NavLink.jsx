import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '..'
import './nav-link.css'

const NavLink = ({ href, label, style, ...props }) => (
	<Link
		href={href}
		label={label}
		className='nav-link'
		style={style}
		{...props}
	/>
)

NavLink.propTypes = {
	href: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	style: PropTypes.shape({}),
}

NavLink.defaultProps = {
	style: {},
}

export default NavLink
