import React from 'react'
import PropTypes from 'prop-types'
import LinkGroup from '../LinkGroup/LinkGroup'
import SocialIcon from '../../components/SocialIcon/SocialIcon'
import Logo from '../Logo/Logo'
import './bootstrap-footer.css'

const BootstrapFooter = ({companyName, links, alt, src, height}) => {
  return (
    <footer className="row align-items-center py-3 my-4 border-top container-fluid">
      <p className="col-6 col-md-4 mb-0 text-muted">© 2022 {companyName}</p>
      <a href="/" className="col-6 col-md-4 d-flex align-items-center justify-content-end justify-content-md-center me-md-auto link-dark text-decoration-none">
        <Logo alt={alt} src={src} height={height} />
      </a>

      <ul class="nav col-md-4 justify-content-start justify-content-md-end">
        {links && links.map((link) => {
          const { url, name } = link 
          return (
            <li className="nav-item">
              <a href={url} className="nav-link px-2 text-muted">
                {name}
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

BootstrapFooter.propTypes = {
  companyName: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape(LinkGroup.propTypes)),
  socials: PropTypes.arrayOf(PropTypes.shape(SocialIcon.propTypes)),
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
}

BootstrapFooter.defaultProps = {
  logo: {
    alt: '',
    height: 40,
  }
}

export default BootstrapFooter
