import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './item.css'

const Item = ({ buttonProps, description, img, imgProps, onClick, orientation, name, style, withButton }) => {
	const { primary, backgroundColor, size, label } = buttonProps
	const { alt, src } = img

	return (
		<article
			className={`item-container item-${orientation}`}
			style={{ ...style }}
		>
			<img className={`item-image item-image-${orientation}`} src={src} alt={alt} {...imgProps} />
			<div className={`item-options-${orientation}`}>
				<div className='item-details'>
					<h3 className={`item-name ${!withButton && `item-name-button`}`} onClick={withButton ? undefined : onClick}>
						{name}
					</h3>
					{description && (
						<p className='item-description'>
							{description}
						</p>
					)}
				</div>
				{withButton && (
					<div className={`item-button-${orientation}`}>
						<Button
							primary={primary}
							backgroundColor={backgroundColor}
							size={size}
							label={label}
							onClick={withButton ? onClick : undefined}
							{...buttonProps}
						/>
					</div>
				)}
			</div>
		</article>
	)
}

Item.propTypes = {
	buttonProps: PropTypes.shape({
		primary: PropTypes.bool,
		backgroundColor: PropTypes.string,
		size: PropTypes.oneOf(['small', 'medium', 'large']),
		label: PropTypes.string.isRequired,
	}),
	description: PropTypes.string,
	img: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
	}).isRequired,
	imgProps: PropTypes.shape({}),
	onClick: PropTypes.func,
	orientation: PropTypes.oneOf(['horizontal', 'vertical']),
	name: PropTypes.string.isRequired,
	style: PropTypes.shape({}),
	withButton: PropTypes.bool
}

Item.defaultProps = {
	buttonProps: {},
	description: '',
	onClick: undefined,
	orientation: 'vertical',
	style: {},
	withButton: false,
}

export default Item
