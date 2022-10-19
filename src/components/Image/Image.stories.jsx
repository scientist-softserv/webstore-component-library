import React from 'react'
import Image from './Image'
import hero from '../../assets/img/hero.jpg'
import item from '../../assets/img/item.jpg'

export default {
	title: 'Components/Image',
	component: Image,
}

const Template = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
	alt: 'test tubes',
	src: item,
	height: 0,
	width: '',
}

export const Alternate = Template.bind({})
Alternate.args = {
	alt: 'DNA chain',
	src: hero,
	height: 400,
	width: '100%',
	style: {
		objectFit: 'cover',
	},
}
