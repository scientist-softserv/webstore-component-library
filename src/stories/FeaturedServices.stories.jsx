import React from 'react'
import { FeaturedServices } from '../compounds'
import { services } from '../resources/args'

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
	services,
}
