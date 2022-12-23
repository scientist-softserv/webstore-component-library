import React from 'react'
import BlankRequestForm from './BlankRequestForm'

export default {
  title: 'Components/BlankRequestForm',
  component: BlankRequestForm,
}

const Template = (args) => <BlankRequestForm {...args} />

export const Default = Template.bind({})
Default.args = {
  onSubmit: (requestForm) => console.log({ requestForm }),
}
