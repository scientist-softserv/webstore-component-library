import React from 'react'
import PropTypes from 'prop-types'
import FaceBook from '../../assets/svg/FaceBook'
import Instagram from '../../assets/svg/Instagram'
import Rss from '../../assets/svg/Rss'
import TikTok from '../../assets/svg/TikTok'
import Twitter from '../../assets/svg/Twitter'
import Vimeo from '../../assets/svg/Vimeo'
import YouTube from '../../assets/svg/YouTube'
import './social-icon.css'

const iconsList = {
  facebook: (height, color) => <FaceBook height={height} fill={color} />,
  instagram: (height, color) => <Instagram height={height} fill={color} />,
  rss: (height, color) => <Rss height={height} fill={color} />,
  tiktok: (height, color) => <TikTok height={height} fill={color} />,
  twitter: (height, color) => <Twitter height={height} fill={color} />,
  vimeo: (height, color) => <Vimeo height={height} fill={color} />,
  youtube: (height, color) => <YouTube height={height} fill={color} />,
}

const SocialIcon = ({ addClass, color, height, icon, url }) => (
  <a href={url} target='_blank' className={`social-icon social-icon-${icon} ${addClass}`} rel='noreferrer'>
    {iconsList[icon](height || 25, color)}
  </a>
)

SocialIcon.propTypes = {
  addClass: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.oneOf(['facebook', 'instagram', 'rss', 'tiktok', 'twitter', 'vimeo', 'youtube']).isRequired,
  url: PropTypes.string.isRequired,
}

SocialIcon.defaultProps = {
  addClass: '',
  color: '#000000',
  height: 25,
}

export default SocialIcon
