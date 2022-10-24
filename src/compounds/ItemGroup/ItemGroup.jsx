import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import Item from '../Item/Item'
import './item-group.css'

const ItemGroup = ({ items }) => (
	<section className='item-group'>
		<Title size='medium' title='Featured Services' />
		<div className={'group-container--4'}>
			{items.slice(0, 4).map((item) => <Item key={item.id} {...item} /> )}
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
	})).isRequired,
}

export default ItemGroup
