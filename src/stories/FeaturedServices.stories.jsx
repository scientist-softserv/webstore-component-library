import React from 'react'
import { FeaturedServices } from '../compounds'
import { services } from '../resources/args'

const four_services = services
const three_services = services.filter((_s, index) => index < 3 )

export default {
	title: 'Compounds/FeaturedServices',
	component: FeaturedServices,
	// parameters: {
	// 	// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
	// 	layout: 'fullscreen',
	// },
}

console.log('three_services', three_services )
console.log('four_services', four_services )

const Template = (args) => <FeaturedServices {...args} />

export const Default = Template.bind({})
Default.args = {
	services: three_services,
	group_by: 3,
}

export const Alternate = (args) => <FeaturedServices {...args} />
Alternate.args = {
	services: four_services,
	group_by: 4,
}
