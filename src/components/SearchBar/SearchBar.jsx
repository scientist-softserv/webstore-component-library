/* eslint jsx-a11y/label-has-associated-control: 1 */
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Search from '../../assets/svg/Search'
import './search-bar.css'

const SearchBar = ({ addClass, initialValue, onSubmit, placeholder }) => {
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ value: inputRef.current.value })
  }

  return (
    <div className={`search-bar-container ${addClass}`}>
      <form className='search-bar-form' method='get' onSubmit={handleSubmit} data-cy='search-bar'>
        <label>
          <span className='visually-hidden'>Search all services</span>
        </label>
        <input
          className='search-bar'
          ref={inputRef}
          placeholder={placeholder}
          type='text'
          defaultValue={initialValue}
        />
        <button type='submit' className='search-button'>
          <Search />
        </button>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  addClass: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,
}

SearchBar.defaultProps = {
  addClass: '',
  placeholder: 'Search for a service',
  initialValue: '',
}

export default SearchBar
