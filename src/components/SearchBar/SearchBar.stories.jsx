import React from 'react'
import SearchBar from './SearchBar'

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
}

const Template = (args) => <SearchBar {...args} />

export const Default = Template.bind({})
Default.args = {
  onSubmit: ({ value }) => console.log('the value is:', value),
  placeholder: 'Search for a service',
}

export const Alternate = Template.bind({})
Alternate.args = {
  onSubmit: ({ value }) => console.log('the value is:', value),
  placeholder: 'Search for a service',
  initialValue: 'abg',
}
