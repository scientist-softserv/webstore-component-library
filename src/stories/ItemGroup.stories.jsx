import React from 'react'
import { ItemGroup } from '../compounds'
import { items } from '../resources/args'

const fiveItems = items.filter((_s, index) => index < 5)
const sixItems = items

export default {
	title: 'Compounds/ItemGroup',
	component: ItemGroup,
	// parameters: {
	// // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
	// 	layout: 'fullscreen',
	// },
}

const Template = (args) => <ItemGroup {...args} />

export const Default = Template.bind({})
Default.args = {
	groupBy: 3,
	items: fiveItems,
}

export const Alternate = (args) => <ItemGroup {...args} />
Alternate.args = {
	groupBy: 4,
	items: sixItems,
}
