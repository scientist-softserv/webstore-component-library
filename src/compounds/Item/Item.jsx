import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/Button/Button'
import Image from '../../components/Image/Image'
import './item.css'

// the href, onClick and ref attributes are from forwardRef
// and will only be defined when this component is wrapped in a Next JS Link component
const Item = React.forwardRef(({ buttonLink, buttonProps, imgProps, item, orientation, style, titleLink, withButtonLink, withTitleLink,
	href, onClick }, ref) => {
	const { id, description, img, name } = item
	const { primary, backgroundColor, size, label } = buttonProps
	const { alt, src } = img

	return (
		<article
			className={`item-container item-${orientation}`}
			key={id}
			style={{ ...style }}
		>
			<Image
				className={`item-image item-image-${orientation}`}
				src={src}
				alt={alt}
				{...imgProps}
			/>
			<div className={`item-options-${orientation}`}>
				<div className='item-details'>
					{withTitleLink ? (
						<a href={titleLink || href} onClick={onClick} ref={ref} className='pointer-cursor item-link'>
							<h3 className='item-name'>
								{name}
							</h3>
						</a>
					) : (
						<h3 className='item-name'>
							{name}
						</h3>
					)}
					{description && (
						<p className='item-description'>
							{description}
						</p>
					)}
				</div>
				{withButtonLink && (
					<a href={buttonLink || href} onClick={onClick} ref={ref} className={`item-button-${orientation} item-link`}>
						<Button
							primary={primary}
							backgroundColor={backgroundColor}
							size={size}
							label={label}
							{...buttonProps}
						/>
					</a>
				)}
			</div>
		</article>
	)
})

Item.propTypes = {
	buttonLink: PropTypes.string,
	buttonProps: PropTypes.shape({
		primary: PropTypes.bool,
		backgroundColor: PropTypes.string,
		size: PropTypes.oneOf(['small', 'medium', 'large']),
		label: PropTypes.string,
	}),
	item: PropTypes.shape({
		description: PropTypes.string,
		id: PropTypes.number.isRequired,
		img: PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		}).isRequired,
		name: PropTypes.string.isRequired,
	}),
	imgProps: PropTypes.shape({}),
	orientation: PropTypes.oneOf(['horizontal', 'vertical']),
	style: PropTypes.shape({}),
	titleLink: PropTypes.string,
	withButtonLink: PropTypes.bool,
	withTitleLink: PropTypes.bool,
}

Item.defaultProps = {
	buttonProps: {},
	imgProps: {},
	item: {
		description: '',
	},
	buttonLink: '',
	orientation: 'vertical',
	style: {},
	titleLink: '',
	withButtonLink: false,
	withTitleLink: false,
}

export default Item
