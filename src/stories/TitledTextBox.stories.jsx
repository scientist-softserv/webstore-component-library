import React from 'react'
import { TitledTextBox } from '../compounds'
import { text } from '../resources/args'

export default {
	title: 'Components/TitledTextBox',
	component: TitledTextBox,
}

const Template = (args) => <TitledTextBox {...args} />

export const One = Template.bind({})
One.args = {
	size: 'medium',
	text,
	title: 'I am Company A'
}

export const Two = Template.bind({})
Two.args = {
	text: 'We are small, yet efficient.',
	title: 'I am Company B'
}
