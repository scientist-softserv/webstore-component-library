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

export const Alternate = Template.bind({})
Alternate.args = {
	description: 'Test the presence of viable microorganisms.',
	img: {
		src: featuredService,
		alt: 'Several rows of test tubes with a liquid being put into one.',
	},
	orientation: 'horizontal',
	name: 'Microbiological Sterility Testing',
}
