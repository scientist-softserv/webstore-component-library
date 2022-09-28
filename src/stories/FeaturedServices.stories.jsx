import React from 'react'
import { FeaturedServices } from '../compounds'
import featuredService from '../assets/img/featured-service.jpg'

export default {
	title: 'Compounds/FeaturedServices',
	component: FeaturedServices,
	// parameters: {
	// 	// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
	// 	layout: 'fullscreen',
	// },
}

export const Default = (args) => <FeaturedServices {...args} />
Default.args = {
	services: [
		{
			description: 'This is the the first service.',
			imgProps: {
				src: featuredService,
				alt: 'Several rows of test tubes with a liquid being put into one.'
			},
			name: 'Service One'
		},
		{
			description: 'This is the the second service.',
			imgProps: {
				src: featuredService,
				alt: 'Several rows of test tubes with a liquid being put into one.'
			},
			name: 'Service Two'
		},
		{
			description: 'This is the the third service.',
			imgProps: {
				src: featuredService,
				alt: 'Several rows of test tubes with a liquid being put into one.'
			},
			name: 'Service Three'
		},
		{
			description: 'This is the the fourth service.',
			imgProps: {
				src: featuredService,
				alt: 'Several rows of test tubes with a liquid being put into one.'
			},
			name: 'Service Four'
		},
	],
}