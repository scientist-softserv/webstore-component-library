import React from 'react'
import { FeaturedService } from '../components'
import featuredService from '../assets/img/featured-service.jpg'

export default {
	title: 'Components/FeaturedService',
	component: FeaturedService,
}

const Template = (args) => <FeaturedService {...args} />

export const Default = Template.bind({})
Default.args = {
	description: 'This is the description of this product or service.',
	img: {
		src: featuredService,
		alt: 'Several rows of test tubes with a liquid being put into one.',
	},
	name: 'Product/Service',
	styles: {
		width: 300,
	},
}
