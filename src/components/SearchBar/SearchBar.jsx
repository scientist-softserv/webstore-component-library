import React from 'react'
import PropTypes from 'prop-types'
import './search-bar.css'

// TODO(alishaevn): make this an onSubmit instead of onChange
const SearchBar = ({ onChange, placeholder, primary, ref, style, ...props }) => {
	const mode = primary ? 'search-bar--primary' : 'search-bar--secondary'

	const handleOnChange = (event) => {
		const { value } = event.target
		onChange({ value, event })
	}

	return (
		<div>
			<input
				className={`search-bar ${mode}`}
				style={style}
				ref={ref}
				onChange={handleOnChange}
				placeholder={placeholder}
				{...props}
			/>
		</div>
	)
}

SearchBar.propTypes = {
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	primary: PropTypes.bool,
	style: PropTypes.shape({}),
}

SearchBar.defaultProps = {
	placeholder: 'Search for a service',
	primary: true,
	style: {},
}

export default SearchBar
