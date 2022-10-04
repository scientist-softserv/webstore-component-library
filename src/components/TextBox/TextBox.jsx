import React from 'react'
import PropTypes from 'prop-types'
import './text-box.css'

const TextBox = ({ alignment, size, style, text }) => {
	// account for Unix and Windows devices
	const paragraphs = text.split(/\n+\t?\r?/)

	return (
		<>
			{paragraphs.map(par =>
				<div className={`text-box--${alignment}`}>
					<p
						className={`text-box text-box--${size}`}
						style={{ ...style }}
					>
						{par}
					</p>
				</div>
			)}
		</>
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
