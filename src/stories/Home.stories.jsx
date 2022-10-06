import React, { useState } from 'react'
import { SearchBar } from '../components'
import { TitledTextBox, ItemGroup, Header } from '../compounds'
import { singleParagraph, onSubmit, items } from '../resources/args'
// import { within, userEvent } from '@storybook/testing-library'

const Home = () => {
	const [user, setUser] = useState()

	return (
		<main>
			<Header
				user={user}
				onLogin={() => setUser({ name: 'Jane Doe' })}
				onLogout={() => setUser(undefined)}
			/>
			<SearchBar onSubmit={onSubmit} />
			<TitledTextBox size='medium' text={singleParagraph} title='About Us' />
			<ItemGroup items={items} />
		</main>
	)
}

export default {
	title: 'Examples/Home Page',
	component: Home,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
}

export const HomePage = () => <Home />

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedOut = Template.bind({})
// export const LoggedIn = Template.bind({})

// LoggedIn.play = async ({ canvasElement }) => {
// 	const canvas = within(canvasElement)
// 	const loginButton = await canvas.getByRole('button', { name: /Log in/i })
// 	await userEvent.click(loginButton)
// }
