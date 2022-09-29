import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '../../components'
import './titled-text-box.css'

const TitledTextBox = ({ size, text, title }) => (
	<section className='titled-text-box'>
		<Title size={size} title={title} />
		<div>
			{text}
		</div>
	</section>
)

TitledTextBox.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default TitledTextBox
