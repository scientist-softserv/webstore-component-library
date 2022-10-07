import React from 'react'
import PropTypes from 'prop-types'
import './link.css'

const Link = ({ href, label, style, ...props }) => (
	<a
		href={href}
		className='link'
		style={style}
		{...props}
	>
		{label}
	</a>
)

Link.propTypes = {
	href: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	style: PropTypes.shape({}),
}

Link.defaultProps = {
	style: {},
}

export default Link
