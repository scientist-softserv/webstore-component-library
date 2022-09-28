import React from 'react'
import PropTypes from 'prop-types'
import './request-form.css'

// WIP
// ui schema
// json schema
// existing data

const RequestForm = ({ form }) => (
	<div className=''>
		{form}
	</div>
)

RequestForm.propTypes = {
	form: PropTypes.shape({}).isRequired,
}

RequestForm.defaultProps = {}

export default RequestForm
