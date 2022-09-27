import React from 'react'
import { Header } from '../compounds'

export default {
	title: 'Compounds/Header',
	component: Header,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
}

const Template = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
	user: {
		name: 'Aaliyah Haughton',
	},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
