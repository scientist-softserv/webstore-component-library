import React from 'react'
import PropTypes from 'prop-types'
import { Item, Title } from '../../components'
import './item-group.css'

const ItemGroup = ({ group_by, items }) => {

	return (
		<section className='item-group'>
			<Title size='medium' title='Featured Services' />
			<div className={`group-wrapper--${group_by}`}>
				{items.map((item, index) => {
					const margin = ((index + 1) % group_by) == 0 ? { marginBottom: 35 } : {marginBottom: 35, marginRight: 35 }
					return <Item key={item.id} {...item} style={margin} />
				})}
			</div>
		</section>
	)
}

ItemGroup.propTypes = {
	group_by: PropTypes.oneOf([3, 4]),
	items: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string.isRequired,
		img: PropTypes.shape({}).isRequired,
		imgProps: PropTypes.shape({}),
		name: PropTypes.string.isRequired,
		style: PropTypes.shape({}),
	})).isRequired,
}

ItemGroup.defaultProps = {
	group_by: 3,
}

export default ItemGroup
