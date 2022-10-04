import React from 'react'
import PropTypes from 'prop-types'
import { Item, Title } from '../../components'
import './item-group.css'

const ItemGroup = ({ group_by, items }) => {
	const margin = {
		marginBottom: 15,
		marginRight: 15,
	}

	return (
		<section className='item-group'>
			<Title size='medium' title='Featured Services' />
			<div className={`group-wrapper--${group_by}`}>
				{items.map((item) => <Item key={item.id} {...item} style={margin} />)}
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
