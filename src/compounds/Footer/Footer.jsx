import React from 'react'
import PropTypes from 'prop-types'
import LinkGroup from '../LinkGroup/LinkGroup'
import SocialIcon from '../../components/SocialIcon/SocialIcon'
import './footer.css'

const Footer = ({ companyName, sections, socials }) => (
  <footer id='footer' className='container-fluid bg-secondary py-4'>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-3 text-center text-md-start'>
          <h5>© {companyName} {new Date().getFullYear()}</h5>
        </div>
        <div
          className='col-12 col-md-7 d-flex flex-column flex-sm-row
          justify-content-around justify-content-md-between text-center
          text-md-start mt-3 mt-md-0'
        >
          {sections && sections.map((section) => {
            const { header, links } = section
            return <LinkGroup header={header} links={links} key={header} {...section} />
          })}
        </div>
        <div className='col-12 col-md-2 d-flex justify-content-center justify-content-md-end mt-5 mt-md-0'>
          {socials && socials.map((social) => {
            const { icon, url } = social
            return <SocialIcon icon={icon} url={url} key={icon} {...social} />
          })}
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  companyName: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape(LinkGroup.propTypes)),
  socials: PropTypes.arrayOf(PropTypes.shape(SocialIcon.propTypes)),
}

Footer.defaultProps = {
  sections: [],
  socials: [],
}

export default Footer
