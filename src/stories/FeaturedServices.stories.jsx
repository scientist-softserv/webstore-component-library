import React from 'react'
import { FeaturedServices } from '../compounds'

export default {
	title: 'Compounds/FeaturedServices',
	component: FeaturedServices,
	// parameters: {
	// 	// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
	// 	layout: 'fullscreen',
	// },
}

export const Default = (args) => <FeaturedServices {...args} />

// export const LoggedIn = Template.bind({})
// LoggedIn.args = {
// 	user: {
// 		name: 'Aaliyah Haughton',
// 	},
// }

// export const LoggedOut = Template.bind({})
// LoggedOut.args = {}
