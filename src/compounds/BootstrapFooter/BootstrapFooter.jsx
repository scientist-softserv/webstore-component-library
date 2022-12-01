import React from 'react'
import PropTypes from 'prop-types'
import LinkGroup from '../LinkGroup/LinkGroup'
import SocialIcon from '../../components/SocialIcon/SocialIcon'
import Logo from '../Logo/Logo'
import './bootstrap-footer.css'

const BootstrapFooter = ({companyName, sections, socials, alt, src}) => {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container-fluid">
      <p class="col-md-4 mb-0 text-muted">© 2022 {companyName}</p>

      <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <Logo alt={alt} src={src}/>
      </a>

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
      </ul>
    </footer>
  )
}

BootstrapFooter.propTypes = {
  companyName: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape(LinkGroup.propTypes)),
  socials: PropTypes.arrayOf(PropTypes.shape(SocialIcon.propTypes)),
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default BootstrapFooter
