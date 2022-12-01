import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import LinkGroup from '../LinkGroup/LinkGroup'
import SocialIcon from '../../components/SocialIcon/SocialIcon'
import './footer.css'

const Footer = ({ companyName, sections, socials }) => {

  return (
  <footer id='footer' className='container-fluid bg-secondary py-4'>
    <div className='webstore-container container'>
      <h5>© {companyName} {new Date().getFullYear()}</h5>
      <div className='footer-sections'>
        {sections && sections.map((section) => {
          const { header, links } = section
          return <LinkGroup header={header} links={links} key={header} {...section} />
        })}
      </div>
      <div className='footer-socials'>
        {socials && socials.map((social) => {
          const { icon, url } = social
          return <SocialIcon icon={icon} url={url} key={icon} {...social} />
        })}
      </div>
    </div>
  </footer>
)}

Footer.propTypes = {
  companyName: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape(LinkGroup.propTypes)),
  socials: PropTypes.arrayOf(PropTypes.shape(SocialIcon.propTypes)),
}

export default Footer
