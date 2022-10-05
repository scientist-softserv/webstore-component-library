import React from 'react'
import PropTypes from 'prop-types'
import { TextBox, Title } from '../../components'
import './titled-text-box.css'

const TitledTextBox = ({ text, text_alignment, text_size, text_style, title, title_alignment, title_size, title_style }) => (
	<section className='titled-text-box'>
		<Title alignment={title_alignment} size={title_size} style={title_style} title={title} />
		<TextBox alignment={text_alignment} size={text_size} style={text_style} text={text} />
	</section>
)

TitledTextBox.propTypes = {
	text: PropTypes.string.isRequired,
	text_alignment: PropTypes.oneOf(['left', 'center', 'right']),
	text_size: PropTypes.oneOf(['small', 'medium', 'large']),
	text_style: PropTypes.shape({}),
	title: PropTypes.string.isRequired,
	title_alignment: PropTypes.oneOf(['left', 'center', 'right']),
	title_size: PropTypes.oneOf(['small', 'medium', 'large']),
	title_style: PropTypes.shape({}),
}

export default TitledTextBox
