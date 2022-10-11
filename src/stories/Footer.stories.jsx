import React from 'react'
import { Footer } from '../compounds'
import { sections, socials } from '../resources/args'

export default {
	title: 'Compounds/Footer',
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
