import React from 'react'
import { AboutUs } from '../compounds'

export default {
	title: 'Components/AboutUs',
	component: AboutUs,
}

const Template = (args) => <AboutUs {...args} />

export const Default = Template.bind({})
Default.args = {
	companyDescription: 'Some nice words to say who we are and why you should work with us. Some nice words to say who we are and why you should work with us. Some nice words to say who we are and why you should work with us. Some nice words to say who we are and why you should work with us. Some nice words to say who we are and why you should work with us. Some nice words to say who we are and why you should work with us.',
}
