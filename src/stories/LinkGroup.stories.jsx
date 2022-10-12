import React from 'react'
import { LinkGroup } from '../components'
import { links } from '../resources/args'

export default {
	title: 'Components/LinkGroup',
	component: LinkGroup,
}

const Template = (args) => <LinkGroup {...args} />

export const Default = Template.bind({})
Default.args = {
	header: 'Header',
	links,
}

export const Alternate = Template.bind({})
Alternate.args = {
	header: 'Header',
	headerStyle: { fontSize: 20, color: '#EC88EE' },
	links,
	linkStyle: { fontSize: 14, color: '#5E5CCF' },
}
