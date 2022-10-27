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
	imgProps: {},
	item: {
		description: '',
		id: 1,
		img: {
			src: item,
			alt: 'Several rows of test tubes with a liquid being put into one.',
		},
		name: 'Test Tubes',
	},
	titleLink: '',
	orientation: 'vertical',
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
	imgProps: {},
	item: {
		description: 'Test the presence of viable microorganisms.',
		id: 2,
		img: {
			src: item,
			alt: 'Several rows of test tubes with a liquid being put into one.',
		},
		name: 'Microbiological Sterility Testing',
	},
	orientation: 'horizontal',
	style: {},
	titleLink: '',
	withButtonLink: true,
	withTitleLink: false,
}

export const WithTitleLink = Template.bind({})
WithTitleLink.args = {
	buttonLink: '',
	buttonProps: {},
	item: {
		description: 'Test the presence of viable microorganisms.',
		id: 3,
		img: {
			src: item,
			alt: 'Several rows of test tubes with a liquid being put into one.',
		},
		name: 'Microbiological Sterility Testing',
	},
	imgProps: {},
	orientation: 'vertical',
	style: {},
	titleLink: '?path=/story/components-item--with-title-link',
	withButtonLink: false,
	withTitleLink: true,
}
