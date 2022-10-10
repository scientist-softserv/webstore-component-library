import React from 'react'
import PropTypes from 'prop-types'
import FaceBook from '../../assets/svg/FaceBook'
import Instagram from '../../assets/svg/Instagram'
import Rss from '../../assets/svg/Rss'
import Twitter from '../../assets/svg/Twitter'

const iconsList = {
	'facebook': (height, color) => <FaceBook height={height} fill={color} />,
	'instagram': (height, color) => <Instagram height={height} fill={color} />,
	'rss': (height, color) => <Rss height={height} fill={color} />,
	'tiktok': '',
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
	icon: PropTypes.oneOf(['facebook', 'instagram', 'rss', 'twitter']).isRequired,
	url: PropTypes.string.isRequired,
}

SocialIcon.defaultProps = {
	color: '#000000',
	height: 25,
}

export default SocialIcon
