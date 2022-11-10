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
	items: items,
}

export const withTitleLink = Template.bind({})
withTitleLink.args = {
	items: items,
	withTitleLink: true
}
