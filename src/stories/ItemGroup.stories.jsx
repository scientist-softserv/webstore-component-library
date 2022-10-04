import React from 'react'
import { ItemGroup } from '../compounds'
import { items } from '../resources/args'

const five_items = items.filter((_s, index) => index < 5 )
const six_items = items

export default {
	title: 'Compounds/ItemGroup',
	component: ItemGroup,
	// parameters: {
	// 	// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
	// 	layout: 'fullscreen',
	// },
}

const Template = (args) => <ItemGroup {...args} />

export const Default = Template.bind({})
Default.args = {
	group_by: 3,
	items: five_items,
}

export const Alternate = (args) => <ItemGroup {...args} />
Alternate.args = {
	group_by: 4,
	items: six_items,
}
