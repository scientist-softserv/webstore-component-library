/* eslint jsx-a11y/label-has-associated-control: 1 */
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Search from '../../assets/svg/Search'
import './search-bar.css'

const SearchBar = ({ onSubmit, placeholder }) => {
	const inputRef = useRef(null)

	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit({ value: inputRef.current.value })
	}

	// TODO(alishaevn): figure out the action below once connected to the api
	return (
		<form action='/' method='get' onSubmit={handleSubmit}>
			<label>
				<span className='visually-hidden'>Search all services</span>
				<input
					className='search-bar'
					ref={inputRef}
					placeholder={placeholder}
					type='text'
				/>
			</label>
			<button type='submit' className='search-button'>
				<Search />
			</button>
		</form>
	)
}

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
}

SearchBar.defaultProps = {
	placeholder: 'Search for a service',
}

export default SearchBar
