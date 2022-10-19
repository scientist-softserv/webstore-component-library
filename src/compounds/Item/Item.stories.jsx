import React from 'react'
import Item from './Item'
import item from '../../assets/img/item.jpg'

export default {
	title: 'Compounds/Item',
	component: Item,
}

const Template = (args) => <Item {...args} />

export const Default = Template.bind({})
Default.args = {
	buttonLink: '',
	buttonProps: {},
	description: '',
	img: {
		src: item,
		alt: 'Several rows of test tubes with a liquid being put into one.',
	},
	imgProps: {},
	titleLink: '',
	orientation: 'vertical',
	name: 'Test Tubes',
	style: {},
	withButtonLink: false,
	withTitleLink: false,
}

export const WithButtonLink = Template.bind({})
WithButtonLink.args = {
	buttonLink: '?path=/story/components-item--with-button-link',
	buttonProps: {
		backgroundColor: '#A9A9A9',
		label: 'Request this item',
		primary: true,
	},
	description: 'Test the presence of viable microorganisms.',
	img: {
		src: item,
		alt: 'Several rows of test tubes with a liquid being put into one.',
	},
	imgProps: {},
	orientation: 'horizontal',
	name: 'Microbiological Sterility Testing',
	style: {},
	titleLink: '',
	withButtonLink: true,
	withTitleLink: false,
}

export const WithTitleLink = Template.bind({})
WithTitleLink.args = {
	buttonLink: '',
	buttonProps: {},
	description: 'Test the presence of viable microorganisms.',
	img: {
		src: item,
		alt: 'Several rows of test tubes with a liquid being put into one.',
	},
	imgProps: {},
	orientation: 'vertical',
	name: 'Microbiological Sterility Testing',
	style: {},
	titleLink: '?path=/story/components-item--with-title-link',
	withButtonLink: false,
	withTitleLink: true,
}
