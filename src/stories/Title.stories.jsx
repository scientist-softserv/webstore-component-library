import React from 'react'
import { Title } from '../components'

export default {
	title: 'Components/Title',
	component: Title,
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
	alignment: 'left',
	title: 'This is my title.',
	size: 'large',
}

export const Alternate = Template.bind({})
Alternate.args = {
	alignment: 'left',
	title: 'This is a title with a custom style property.',
	size: 'large',
	style: {
		color: '#AB8290',
	},
}
