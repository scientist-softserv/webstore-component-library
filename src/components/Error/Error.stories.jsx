import React from 'react'
import Error from './Error'

export default {
  title: 'Components/Error',
  component: Error,
}

const Template = (args) => <Error {...args} />

export const Default = Template.bind({})
Default.args = {
  alert: {
    title: '',
    body: ['A standard alert.'],
    variant: 'warning'
  },
  buttonProps: {
    text: 'Click to return to the previous page.'
  },
  dismissible: true,
  withBackButton: false,
}

export const WithError = Template.bind({})
WithError.args = {
  alert: {
    title: "We're sorry, something went wrong.",
    body: ['This is how an error would present in dev. There are instances where there may be several api errors on a single page. We would render them all.', 'This is a second error message.', 'This is a third error message.'],
    variant: 'warning'
  },
  buttonProps: {
    onClick: () => console.log('click me!'),
    text: 'Click to return to the previous page.'
  },
  dismissible: false,
  withBackButton: true,
}

export const UnauthorizedUser = Template.bind({})
UnauthorizedUser.args = {
  alert: {
    title: 'Unauthorized',
    body: ['Please sign in to access this page.'],
    variant: 'info'
  },
  buttonProps: {},
  dismissible: false,
  withBackButton: false,
}
