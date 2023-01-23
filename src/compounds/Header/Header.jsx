import React from 'react'
import PropTypes from 'prop-types'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../Logo/Logo'

const Header = ({ logo, navLinks, userSession }) => {
  const { src, alt } = logo

  return (
    <Navbar bg='secondary' expand='lg'>
      <Container>
        <Navbar.Brand className='w-50'>
          <Logo src={src} alt={alt} height={45} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {/* TODO: show the sign in/out button depending on if there's a userSession */}
            {navLinks.map(nav => (
              <Nav.Link
                className='link-dark'
                href={nav.path}
                key={`${nav.label}-nav-link`}
                onClick={nav.onClick}
              >
                {nav.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    path: PropTypes.string,
  })).isRequired,
  userSession: PropTypes.shape({}),
}

Header.defaultProps = {
  userSession: null,
}

export default Header
