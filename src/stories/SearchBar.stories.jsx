import React from 'react'
import { SearchBar } from '../components'

export default {
	title: 'Components/SearchBar',
	component: SearchBar,
}

const Template = (args) => <SearchBar {...args} />

export const Default = Template.bind({})
Default.args = {
	onChange: ({ value }) => console.log(`You just typed: ${value}`),
	placeholder: 'Search for a service',
	primary: true,
	style: {},
}
