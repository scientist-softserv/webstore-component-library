import React from 'react'
import PropTypes from 'prop-types'
import { Item, Title } from '../../components'
import './item-group.css'

const ItemGroup = ({ groupBy, items }) => (
	<section className='item-group'>
		<Title size='medium' title='Featured Services' />
		<div className={`group-container--${groupBy}`}>
			{items.map((item) => {
				const margin = { marginBottom: 35, marginRight: 35, height: 300 }
				return <Item key={item.id} {...item} style={margin} />
			})}
		</div>
	</section>
)

ItemGroup.propTypes = {
	groupBy: PropTypes.oneOf([3, 4]),
	items: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string.isRequired,
		img: PropTypes.shape({}).isRequired,
		imgProps: PropTypes.shape({}),
		name: PropTypes.string.isRequired,
		style: PropTypes.shape({}),
	})).isRequired,
}

ItemGroup.defaultProps = {
	groupBy: 3,
}

export default ItemGroup
