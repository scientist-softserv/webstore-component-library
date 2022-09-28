import React from 'react'
// import { within, userEvent } from '@storybook/testing-library'
import { Home } from '../pages'

export default {
	title: 'Pages/Home',
	component: Home,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
}

export const Default = (args) => <Home {...args} />

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedOut = Template.bind({})
// export const LoggedIn = Template.bind({})

// LoggedIn.play = async ({ canvasElement }) => {
// 	const canvas = within(canvasElement)
// 	const loginButton = await canvas.getByRole('button', { name: /Log in/i })
// 	await userEvent.click(loginButton)
// }
