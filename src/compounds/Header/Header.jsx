import React from 'react'
import PropTypes from 'prop-types'
import { Container, Nav, Navbar } from 'react-bootstrap'
// import NavLink from '../NavLink/NavLink'
import Logo from '../Logo/Logo'

// may come back to hard code these

const Header = ({ browseLink, logInLink, logo, logOutLink, requestsLink, user }) => {
  const { src, alt } = logo

  return (
    <Navbar bg='secondary' expand='lg'>
      <Container>
        <Navbar.Brand className='w-50'>
          <Logo src={src} alt={alt} height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href={browseLink}>Browse</Nav.Link>
            <Nav.Link href={requestsLink}>Requests</Nav.Link>
            {user ? (
              <Nav.Link href={logOutLink}>Log Out</Nav.Link>
            ) : (
              <Nav.Link href={logInLink}>Log In</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  browseLink: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  logInLink: PropTypes.string.isRequired,
  logOutLink: PropTypes.string.isRequired,
  requestsLink: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
}

Header.defaultProps = {
  user: null,
}

export default Header
