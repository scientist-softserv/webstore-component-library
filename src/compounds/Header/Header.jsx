import React from 'react'
import PropTypes from 'prop-types'
import { Container, Nav, Navbar } from 'react-bootstrap'
import ToggleIcon from '../../assets/svg/ToggleIcon'
import Logo from '../Logo/Logo'

const Header = ({ auth, linkColor, logo, navLinks, userSession }) => {
  const { src, alt } = logo

  return (
    <Navbar bg='primary' expand='lg'>
      <Container>
        <Navbar.Brand className='w-50'>
          <Logo src={src} alt={alt} height={45} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <ToggleIcon linkColor={linkColor} />
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {navLinks.map((nav) => (
              <Nav.Link
                className={`link-${linkColor}`}
                href={nav.path}
                key={`${nav.label}-nav-link`}
                onClick={nav.onClick}
              >
                {nav.label}
              </Nav.Link>
            ))}
            {userSession ? (
              <Nav.Link className={`link-${linkColor}`} onClick={auth.signOut}>Sign Out</Nav.Link>
            ) : (
              <Nav.Link className={`link-${linkColor}`} onClick={auth.signIn}>Sign In</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  auth: PropTypes.shape({
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }).isRequired,
  linkColor: PropTypes.string,
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
  linkColor: 'dark',
  userSession: null,
}

export default Header
