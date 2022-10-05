import React from 'react'
import PropTypes from 'prop-types'
import './item.css'

const Item = ({ description, img, imgProps, orientation, name, style }) => {
	const { alt, src } = img

	return (
		<div
			className={`item-wrapper item-${orientation}`}
			style={{ ...style }}
		>
			<img className={`item-image item-image-${orientation}`} src={src} alt={alt} {...imgProps} />
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
	description: PropTypes.string,
	img: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
	}).isRequired,
	imgProps: PropTypes.shape({}),
	orientation: PropTypes.oneOf(['horizontal', 'vertical']),
	name: PropTypes.string.isRequired,
	style: PropTypes.shape({}),
}

Item.defaultProps = {
	description: '',
	orientation: 'vertical',
	style: {},
}

export default Item
