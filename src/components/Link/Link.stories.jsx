import React from 'react'
import Link from './Link'

export default {
	title: 'Components/Link',
	component: Link,
	parameters: {
		layout: 'fullscreen',
	},
}

const Template = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
	href: '',
	label: 'I am a link',
	style: {},
}

export const Alternate = Template.bind({})
Alternate.args = {
	href: '',
	label: 'No underline!',
	style: {
		textDecoration: 'none',
		color: '#AB1289'
	},
}
