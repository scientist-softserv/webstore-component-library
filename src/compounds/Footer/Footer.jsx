import React from 'react'
import PropTypes from 'prop-types'
import SocialIcon from '../../components/SocialIcon/SocialIcon'
import LinkGroup from '../LinkGroup/LinkGroup'
import './footer.css'

const Footer = ({ companyName, sections, socials }) => (
	<footer className='container footer-container'>
		<h5>© {companyName} {new Date().getFullYear()}</h5>
		<div className='footer-sections'>
			{sections && sections.map((section) => {
				const { header, links } = section
				return <LinkGroup header={header} links={links} {...section} />
			})}
		</div>
		<div className='footer-socials'>
			{socials && socials.map((social) => {
				const { icon, url } = social
				return <SocialIcon icon={icon} url={url} {...social} />
			})}
		</div>
	</footer>
)

Footer.propTypes = {
	companyName: PropTypes.string.isRequired,
	sections: PropTypes.arrayOf(PropTypes.shape(LinkGroup.propTypes)),
	socials: PropTypes.arrayOf(PropTypes.shape(SocialIcon.propTypes)),
}

export default Footer
