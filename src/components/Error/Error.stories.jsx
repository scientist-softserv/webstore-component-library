import React from 'react'
import Error from './Error'

export default {
  title: 'Components/Error',
  component: Error,
}

const Template = (args) => <Error {...args} />

export const Default = Template.bind({})
Default.args = {
  environment: 'dev',
  errorText: 'this is an error in dev',
  variant: 'danger',
}

export const Alternate = Template.bind({})
Alternate.args = {
  environment: 'prod',
  errorText: 'this is an error in prod',
  variant: 'warning',
}
