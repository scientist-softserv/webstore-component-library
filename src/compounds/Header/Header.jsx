import React from 'react'
import PropTypes from 'prop-types'
import NavLink from '../NavLink/NavLink'
import Logo from '../Logo/Logo'
import './header.css'

// may come back to hard code these

const Header = ({ browseLink, logInLink, logo, logOutLink, requestsLink, user }) => {
	const { img, alt } = logo

	return (
		<header>
			<div className='container header-container'>
				<Logo img={img} alt={alt} />
				<div>
					<NavLink href={browseLink} label='Browse' />
					<NavLink href={requestsLink} label='Requests' />
					{user ? (
						<NavLink href={logOutLink} label='Log Out' />
					) : (
						<NavLink href={logInLink} label='Log In' />
					)}
				</div>
			</div>
		</header>
	)
}

Header.propTypes = {
	browseLink: PropTypes.string.isRequired,
	logo: PropTypes.shape({
		img: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
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
