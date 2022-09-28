import React from 'react'
import { Title } from '../components'

export default {
	title: 'Components/Title',
	component: Title,
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
	label: 'This is a title with a custom styles property.',
	styles: {
		color: '#AB8290',
	},
}
