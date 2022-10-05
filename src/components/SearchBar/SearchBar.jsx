import { useState } from 'react'
import PropTypes from 'prop-types'
import Search from '../../assets/svg/Search'
import './search-bar.css'

const SearchBar = ({ onSubmit, placeholder, primary, ref, style, ...props }) => {
	const [searchInput, setSearchInput] = useState('')

	const handleChange = (event) => {
		event.preventDefault()
		setSearchInput(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit ? onSubmit({ value: searchInput }) : alert('You must pass an onSubmit function to this component.')
	}

	return (
		<form action='/' method='get' onSubmit={handleSubmit}>
			<label htmlFor='header-search'>
				<span className='visually-hidden'>Search all services</span>
			</label>
			<input
				className='search-bar'
				style={style}
				ref={ref}
				onChange={handleChange}
				placeholder={placeholder}
				value={searchInput}
				{...props}
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
	style: PropTypes.shape({}),
}

SearchBar.defaultProps = {
	placeholder: 'Search for a service',
	style: {},
}

export default SearchBar
