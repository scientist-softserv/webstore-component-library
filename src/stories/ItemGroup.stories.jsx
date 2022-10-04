import React from 'react'
import { ItemGroup } from '../compounds'
import { items } from '../resources/args'

const four_items = items
const three_items = items.filter((_s, index) => index < 3 )

export default {
	title: 'Compounds/ItemGroup',
	component: ItemGroup,
	// parameters: {
	// 	// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
	// 	layout: 'fullscreen',
	// },
}

console.log('three_items', three_items )
console.log('four_items', four_items )

const Template = (args) => <ItemGroup {...args} />

export const Default = Template.bind({})
Default.args = {
	group_by: 3,
	items: three_items,
}

export const Alternate = (args) => <ItemGroup {...args} />
Alternate.args = {
	group_by: 4,
	items: four_items,
}
