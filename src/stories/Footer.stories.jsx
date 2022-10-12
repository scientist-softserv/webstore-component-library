import React from 'react'
import { Footer } from '../components'
import { sections, socials } from '../resources/args'

export default {
	title: 'Components/Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen',
	},
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
	companyName: 'Company A',
	sections: [],
	socials: [],
}

export const Alternate = Template.bind({})
Alternate.args = {
	companyName: 'Company B',
	sections,
	socials,
}
