import React from 'react'
import { TextBox, Title } from '../components'
import { paragraph_one, paragraph_two, paragraph_three } from '../resources/args'

const TTB = () => (
	<section className='titled-text-box'>
		<Title alignment={'left'} size={'large'} title={'Pride & Prejudice'} />
		<TextBox alignment={'left'} size={'small'} text={paragraph_one}/>
		<TextBox alignment={'left'} size={'small'} text={paragraph_two}/>
		<TextBox alignment={'left'} size={'small'} text={paragraph_three}/>
	</section>
)


export default {
	title: 'Examples/Titled Text Boxes',
	component: TTB,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
}

export const TitledTextBoxes = () => <TTB />

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedOut = Template.bind({})
// export const LoggedIn = Template.bind({})

// LoggedIn.play = async ({ canvasElement }) => {
// 	const canvas = within(canvasElement)
// 	const loginButton = await canvas.getByRole('button', { name: /Log in/i })
// 	await userEvent.click(loginButton)
// }
