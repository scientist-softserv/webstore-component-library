import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '..'
import './item.css'

const Item = (props) => {
	const {
		buttonProps, description, img, imgProps, buttonLink, orientation, name, style, withButtonLink,
		withTitleLink, titleLink,
	} = props
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
					{withTitleLink ? (
						<a href={titleLink} className='pointer-cursor item-link'>
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
					<a href={buttonLink} className={`item-button-${orientation} item-link`}>
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
}

Item.propTypes = {
	buttonLink: PropTypes.string,
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
	orientation: PropTypes.oneOf(['horizontal', 'vertical']),
	name: PropTypes.string.isRequired,
	style: PropTypes.shape({}),
	titleLink: PropTypes.string,
	withButtonLink: PropTypes.bool,
	withTitleLink: PropTypes.bool,
}

Item.defaultProps = {
	buttonProps: {},
	description: '',
	imgProps: {},
	buttonLink: '',
	orientation: 'vertical',
	style: {},
	titleLink: '',
	withButtonLink: false,
	withTitleLink: false,
}

export default Item
