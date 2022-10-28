import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import Item from '../Item/Item'
import './item-group.css'

const ItemGroup = ({ buttonProps, imgProps, items, orientation, style, withButtonLink, withTitleLink }) => (
	<section className='item-group'>
		<Title size='large' title='Featured Services' />
		<div className={'group-container--4'}>
			{items.map((item) => (
				<Link href={`/${item.slug}`} passHref legacyBehavior>
					<Item
						buttonProps={buttonProps}
						imgProps={imgProps}
						item={item}
						orientation={orientation}
						style={style}
						withButtonLink={withButtonLink}
						withTitleLink={withTitleLink}
					/>
				</Link>
			))}
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
