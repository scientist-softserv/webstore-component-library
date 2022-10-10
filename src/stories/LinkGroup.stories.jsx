import React from 'react'
import { LinkGroup } from '../compounds'
import { links } from '../resources/args'

export default {
	title: 'Compounds/LinkGroup',
	component: LinkGroup,
}

const Template = (args) => <LinkGroup {...args} />

export const Default = Template.bind({})
Default.args = {
	header: 'Header',
	links,
}
