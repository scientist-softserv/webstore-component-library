import React from 'react'
import AdditionalInfo from './AdditionalInfo'

export default {
  title: 'Components/AdditionalInfo',
  component: AdditionalInfo,
}

const Template = (args) => <AdditionalInfo {...args} />

export const Default = Template.bind({})
Default.args = {
  updateRequestForm: (requestForm) => console.log({ requestForm }),
}
