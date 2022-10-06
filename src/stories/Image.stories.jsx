import React from 'react'
import { Image } from '../components'
import item from '../assets/img/item.jpg'

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
	width: 0,
}

export const Alternate = Template.bind({})
Alternate.args = {
	alt: 'test tubes',
	src: item,
	height: 200,
	width: 0,
}
