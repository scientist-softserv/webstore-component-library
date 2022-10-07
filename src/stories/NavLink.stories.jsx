import React from 'react'
import { NavLink } from '../components'

export default {
	title: 'Components/NavLink',
	component: NavLink,
	parameters: {
		layout: 'fullscreen',
	},
}

const Template = (args) => <NavLink {...args} />

export const Default = Template.bind({})
Default.args = {
	href: '',
	label: 'I am a nav link for the header',
	style: {},
}
