import React from 'react'
import FeaturedService from '../components/FeaturedService'

export default {
	title: 'Components/FeaturedService',
	component: FeaturedService,
}

const Template = (args) => <FeaturedService {...args} />

export const Default = Template.bind({})
