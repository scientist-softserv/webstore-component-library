import React from 'react'
import Error from './Error'

export default {
  title: 'Components/Error',
  component: Error,
}

const Template = (args) => <Error {...args} />

export const Default = Template.bind({})
Default.args = {
  errorTitle: 'Errors:',
  errorText: 'this is an error in dev. error block would go here',
  variant: 'danger',
}

export const Alternate = Template.bind({})
Alternate.args = {
  errorTitle: "We're sorry, something went wrong.",
  errorText: 'Please refresh the page and try again. this is an error in prod',
  variant: 'warning',
}
