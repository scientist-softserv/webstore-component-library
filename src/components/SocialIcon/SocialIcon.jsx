import React from 'react'
import PropTypes from 'prop-types'
import Instagram from '../../assets/svg/Instagram'
import Twitter from '../../assets/svg/Twitter'

const iconsList = {
	'instagram': (height, color) => <Instagram height={height} fill={color} />,
	'twitter': (height, color) => <Twitter height={height} fill={color} />,
}

const SocialIcon = ({ color, height, icon, url }) => (
	<a href={url} target='_blank' className={`social-icon-${icon}`}>
		{iconsList[icon](height || 25, color)}
	</a>
)

SocialIcon.propTypes = {
	color: PropTypes.string,
	height: PropTypes.number,
	icon: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
}

SocialIcon.defaultProps = {
	color: '#000000',
	height: 25,
}

export default SocialIcon
