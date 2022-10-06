import React from 'react'
import { TitledTextBox } from '../compounds'
import { singleParagraph } from '../resources/args'

export default {
	title: 'Compounds/TitledTextBox',
	component: TitledTextBox,
}

const Template = (args) => <TitledTextBox {...args} />

export const Default = Template.bind({})
Default.args = {
	text: singleParagraph,
	textAlignment: 'left',
	textSize: 'small',
	textStyle: {},
	title: 'I am Company A',
	titleAlignment: 'left',
	titleSize: 'large',
	titleStyle: {},
}

export const Alternate = Template.bind({})
Alternate.args = {
	text: 'Champion DNA.',
	textAlignment: 'center',
	textSize: 'medium',
	textStyle: {},
	title: 'We are Company B',
	titleAlignment: 'center',
	titleSize: 'large',
	titleStyle: {
		color: '#ABED12',
	},
}
