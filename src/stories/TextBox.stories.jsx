import React from 'react'
import { TextBox } from '../components'
import { multiple_paragraphs, single_paragraph } from '../resources/args'

export default {
	title: 'Components/TextBox',
	component: TextBox,
}

const Template = (args) => <TextBox {...args} />

export const Default = Template.bind({})
Default.args = {
	alignment: 'left',
	text: single_paragraph,
	size: 'small',
}

export const Alternate = Template.bind({})
Alternate.args = {
	alignment: 'left',
	text: multiple_paragraphs,
	size: 'medium',
}
