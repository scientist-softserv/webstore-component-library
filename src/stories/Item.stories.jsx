import React from 'react'
import { Item } from '../components'
import featuredService from '../assets/img/item.jpg'

export default {
	title: 'Components/Item',
	component: Item,
}

const Template = (args) => <Item {...args} />

export const Default = Template.bind({})
Default.args = {
	description: '',
	img: {
		src: featuredService,
		alt: 'Several rows of test tubes with a liquid being put into one.',
	},
	name: 'Test Tubes',
}
