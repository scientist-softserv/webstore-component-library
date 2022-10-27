import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import Item from '../Item/Item'
import './item-group.css'

const ItemGroup = ({ buttonLink, buttonProps, imgProps, items, orientation, style, titleLink, withButtonLink, withTitleLink }) => (
	<section className='item-group'>
		<Title size='large' title='Featured Services' />
		<div className={'group-container--4'}>
			{items.map((item) => (
				<Item
					buttonLink={buttonLink}
					buttonProps={buttonProps}
					imgProps={imgProps}
					item={item}
					orientation={orientation}
					style={style}
					titleLink={titleLink}
					withButtonLink={withButtonLink}
					withTitleLink={withTitleLink}
				/>
			) )}
		</div>
	</section>
)

ItemGroup.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string.isRequired,
		img: PropTypes.shape({}).isRequired,
		imgProps: PropTypes.shape({}),
		name: PropTypes.string.isRequired,
		style: PropTypes.shape({}),
		slug: PropTypes.string,
	})).isRequired,
}

export default ItemGroup
