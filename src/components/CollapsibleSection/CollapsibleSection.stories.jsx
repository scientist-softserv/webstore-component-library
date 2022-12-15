import React from 'react'
import CollapsibleSection from './CollapsibleSection'

export default {
  title: 'Components/CollapsibleSection',
  component: CollapsibleSection,
}

const Template = (args) => <CollapsibleSection {...args} />

export const Default = Template.bind({})
Default.args = {
  description: 'this is a description',
  header: 'this is a header',
}
