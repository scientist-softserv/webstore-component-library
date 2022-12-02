import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo/Logo'

const Footer2 = ({ companyName, links, alt, src, height }) => (
  <footer className='align-items-center py-3 border-top container-fluid'>
    <div className='row'>
      <p className='col-sm-6 col-md-4 mb-0 text-muted order-3 order-sm-1
      text-center text-sm-start justify-content-center justify-content-sm-start d-flex align-items-center mt-2 mt-sm-0'
      >© 2022 {companyName}
      </p>
      <a
        href='/'
        className='col-sm-6 col-md-4 d-flex align-items-center
        justify-content-center justify-content-sm-end justify-content-md-center me-md-auto
        link-dark text-decoration-none order-1 order-sm-2'
      >
        <Logo alt={alt} src={src} height={height} />
      </a>
      <ul className='nav col-md-4 justify-content-center
      justify-content-sm-start justify-content-md-end order-2 order-sm-3 align-items-center mt-2 mt-sm-0'
      >
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
    </div>
  </footer>
)

Footer2.propTypes = {
  companyName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.string,
}

Footer2.defaultProps = {
  alt: '',
  height: 40,
}

export default Footer2
