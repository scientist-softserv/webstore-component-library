import React from 'react'
import PropTypes from 'prop-types'
import './nav-link.css'


const NavLink = ({ href, label, ...props }) => {

	return (
		<a
			href={href}
			className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
			{...props}
		>
			{label}
		</a>
	)
}

// NavLink.propTypes = {
// 	primary: PropTypes.bool,
// 	backgroundColor: PropTypes.string,
// 	size: PropTypes.oneOf(['small', 'medium', 'large']),
// 	label: PropTypes.string.isRequired,
// 	onClick: PropTypes.func,
// }

// NavLink.defaultProps = {
// 	backgroundColor: null,
// 	primary: false,
// 	size: 'medium',
// 	onClick: undefined,
// }

export default NavLink
