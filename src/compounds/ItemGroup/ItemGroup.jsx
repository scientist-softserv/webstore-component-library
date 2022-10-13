import React from 'react'
import PropTypes from 'prop-types'
import { Title } from '../../components'
import Item from '../Item/Item'
import './item-group.css'

const ItemGroup = ({ columns, items }) => (
	<section className='item-group'>
		<Title size='medium' title='Featured Services' />
		<div className={`group-container--${columns}`}>
			{items.map((item) => {
				const margin = { marginBottom: 35, marginRight: 33, height: 300 }
				return <Item key={item.id} {...item} style={margin} />
			})}
		</div>
	</section>
)

ItemGroup.propTypes = {
	columns: PropTypes.oneOf([3, 4]),
	items: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string.isRequired,
		img: PropTypes.shape({}).isRequired,
		imgProps: PropTypes.shape({}),
		name: PropTypes.string.isRequired,
		style: PropTypes.shape({}),
	})).isRequired,
}

ItemGroup.defaultProps = {
	columns: 3,
}

export default ItemGroup
