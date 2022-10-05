import React from 'react'
import PropTypes from 'prop-types'
import './item.css'

const Item = ({ description, img, imgProps, name, style }) => {
	const { alt, src } = img

	return (
		<div
			className='item-wrapper'
			style={{ ...style }}
		>
			<img className='item-image' src={src} alt={alt} {...imgProps} />
			<div className='item'>
				<h3 className='item-name'>
					{name}
				</h3>
				{description && (
					<p className='item-description'>
						{description}
					</p>
				)}
			</div>
		</div>
	)
}

Item.propTypes = {
	description: PropTypes.string.isRequired,
	img: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
	}).isRequired,
	imgProps: PropTypes.shape({}),
	name: PropTypes.string.isRequired,
	style: PropTypes.shape({}),
}

Item.defaultProps = {
	description: '',
	style: {},
}

export default Item
