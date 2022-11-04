import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import Item from '../Item/Item'
import './item-group.css'

const ItemGroup = ({ buttonProps, imgProps, items, orientation, style, withButtonLink, withTitleLink }) => (
	<section className='item-group center-content'>
		<Title size='large' title='Featured Services' />
		<div className={'group-container--4'}>
			{items.map((item) => (
				<Link key={item.id} href={`${item.slug}`} passHref legacyBehavior>
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
	buttonProps: PropTypes.shape({
		primary: PropTypes.bool,
		backgroundColor: PropTypes.string,
		size: PropTypes.oneOf(['small', 'medium', 'large']),
		label: PropTypes.string,
	}),
	imgProps: PropTypes.shape({}),
	items: PropTypes.arrayOf(PropTypes.shape({
		...Item.propTypes,
		imgProps: PropTypes.shape({}),
		style: PropTypes.shape({}),
	})).isRequired,
	orientation: PropTypes.oneOf(['horizontal', 'vertical']),
	style: PropTypes.shape({}),
	withButtonLink: PropTypes.bool,
	withTitleLink: PropTypes.bool,
}

export default ItemGroup
