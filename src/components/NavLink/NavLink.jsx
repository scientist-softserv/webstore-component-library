import React from 'react'
import PropTypes from 'prop-types'
import './nav-link.css'

// WIP

const NavLink = ({ href, label, ...props }) => (
	<a
		href={href}
		className='nav-link'
		{...props}
	>
		{label}
	</a>
)

NavLink.propTypes = {
	href: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}

NavLink.defaultProps = {}

export default NavLink
