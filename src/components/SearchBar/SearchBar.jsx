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

	return (
		<form action='/' method='get' onSubmit={handleSubmit}>
			<label htmlFor='header-search'>
				<span className='visually-hidden'>Search all services</span>
			</label>
			<input
				className='search-bar'
				ref={inputRef}
				placeholder={placeholder}
				type='text'
			/>
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
