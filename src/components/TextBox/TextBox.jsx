import React from 'react'
import PropTypes from 'prop-types'
import './text-box.css'

/*
	Paragraph elements ignore new line characters and backticks.
	TextBox will only render a single paragraph; if multiple paragraphs are desired, multiple TextBox
	components must be used.
 */
const TextBox = ({ alignment, size, style, text }) => {
	return (
		<div className={`text-box--${alignment}`}>
			<p
				className={`text-box text-box--${size}`}
				style={{ ...style }}
			>
				{text}
			</p>
		</div>
	)
}

TextBox.propTypes = {
	alignment: PropTypes.oneOf(['left', 'center', 'right']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	style: PropTypes.shape({}),
	text: PropTypes.string.isRequired,
}

TextBox.defaultProps = {
	alignment: 'left',
	size: 'small',
	style: {},
}

export default TextBox
