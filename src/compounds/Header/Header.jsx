import React from 'react'
import PropTypes from 'prop-types'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../Logo/Logo'

// may come back to hard code these

const Header = ({ browseLink, logInLink, logo, logOutLink, requestsLink, user }) => {
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
            <Nav.Link href={browseLink} className='link-dark'>Browse</Nav.Link>
            <Nav.Link href={requestsLink} className='link-dark'>Requests</Nav.Link>
            {user ? (
              <Nav.Link href={logOutLink} className='link-dark'>Log Out</Nav.Link>
            ) : (
              <Nav.Link href={logInLink} className='link-dark'>Log In</Nav.Link>
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
