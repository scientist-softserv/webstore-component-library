import React from 'react'
import { TitledTextBox } from '../compounds'
import { multiple_paragraphs, single_paragraph } from '../resources/args'

export default {
	title: 'Components/TitledTextBox',
	component: TitledTextBox,
}

const Template = (args) => <TitledTextBox {...args} />

export const Default = Template.bind({})
Default.args = {
	text: single_paragraph,
	text_alignment: 'left',
	text_size: 'small',
	text_style: {},
	title: 'I am Company A',
	title_alignment: 'left',
	title_size: 'large',
	title_style: {},
}

export const Alternate = Template.bind({})
Alternate.args = {
	text: 'Champion DNA.',
	text_alignment: 'center',
	text_size: 'medium',
	text_style: {},
	title: 'We are Company B',
	title_alignment: 'center',
	title_size: 'large',
	title_style: {
		color: '#ABED12'
	},
}
