import React from 'react'
import { SearchBar } from '../components'

export default {
	title: 'Components/SearchBar',
	component: SearchBar,
}

const Template = (args) => <SearchBar {...args} />

export const Default = Template.bind({})
Default.args = {
	onSubmit: ({ value }) => console.log('the value is:', value),
	placeholder: 'Search for a service',
	style: {},
}
