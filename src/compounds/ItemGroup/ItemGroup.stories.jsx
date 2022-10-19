import React from 'react'
import ItemGroup from './ItemGroup'
import { items } from '../../resources/args'

const fiveItems = items.filter((_s, index) => index < 5)
const sixItems = items

export default {
	title: 'Compounds/ItemGroup',
	component: ItemGroup,
}

const Template = (args) => <ItemGroup {...args} />

export const Default = Template.bind({})
Default.args = {
	columns: 3,
	items: fiveItems,
}

export const Alternate = (args) => <ItemGroup {...args} />
Alternate.args = {
	columns: 4,
	items: sixItems,
}
