import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo/Logo'
import './bootstrap-footer.css'

const BootstrapFooter = ({ companyName, links, alt, src, height }) => (
  <footer className='row align-items-center py-3 my-4 border-top container-fluid'>
    <p className='col-6 col-md-4 mb-0 text-muted'>© 2022 {companyName}</p>
    <a
      href='/'
      className='col-6 col-md-4 d-flex align-items-center
      justify-content-end justify-content-md-center me-md-auto
      link-dark text-decoration-none'
    >
      <Logo alt={alt} src={src} height={height} />
    </a>
    <ul className='nav col-md-4 justify-content-start justify-content-md-end'>
      {links && links.map((link) => {
        const { url, name } = link
        return (
          <li className='nav-item' key={name}>
            <a href={url} className='nav-link px-2 text-muted'>
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  </footer>
)

BootstrapFooter.propTypes = {
  companyName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.string,
}

BootstrapFooter.defaultProps = {
  alt: '',
  height: 40,
}

export default BootstrapFooter
