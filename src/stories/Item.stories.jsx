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
	buttonProps: {},
	description: '',
	img: {
		src: featuredService,
		alt: 'Several rows of test tubes with a liquid being put into one.',
	},
	imgProps: {},
	onClick: () => console.log(`You clicked the ITEM!`),
	orientation: 'vertical',
	name: 'Test Tubes',
	style: {},
	withButton: false,
}

export const Alternate = Template.bind({})
Alternate.args = {
	buttonProps:{
		backgroundColor: 'grey',
		label: 'Request this item',
		primary: true,
	},
	description: 'Test the presence of viable microorganisms.',
	img: {
		src: featuredService,
		alt: 'Several rows of test tubes with a liquid being put into one.',
	},
	imgProps: {},
	onClick: () => console.log(`You clicked the BUTTON!`),
	orientation: 'horizontal',
	name: 'Microbiological Sterility Testing',
	style: {},
	withButton: true,
}
