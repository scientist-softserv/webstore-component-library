import React from 'react'
import ItemGroup from './ItemGroup'
import { items } from '../../resources/args'

export default {
	title: 'Compounds/ItemGroup',
	component: ItemGroup,
}

const Template = (args) => <ItemGroup {...args} />

export const Default = Template.bind({})
Default.args = {
	items: items.slice(0, 3),
}

export const withTitleLink = Template.bind({})
withTitleLink.args = {
	items: items.slice(0, 3),
	withTitleLink: true
}
