import React from 'react'
import PropTypes from 'prop-types'
import './search-bar.css'

const SearchBar = ({ onChange, placeholder, primary, ref, styles, ...props }) => {
	const mode = primary ? 'search-bar--primary' : 'search-bar--secondary'

	const handleOnChange = event => {
    const { value } = event.target
    onChange({ value, event })
  }

	return (
		<div>
			<input
				className={`search-bar ${mode}`}
				styles={{ styles }}
				ref={ref}
				onChange={handleOnChange}
				placeholder={placeholder}
				{...props}
			/>
			{/* </input> */}

		</div>
	)
}

SearchBar.propTypes = {
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	primary: PropTypes.bool,
	styles: PropTypes.object,
}

SearchBar.defaultProps = {
	onChange: ({ value }) => console.log({ value }),
	placeholder: 'Search for a service',
	primary: true,
	styles: {},
}

export default SearchBar
