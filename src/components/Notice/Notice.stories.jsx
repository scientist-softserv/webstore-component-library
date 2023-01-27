import React from 'react'
import Notice from './Notice'

export default {
  title: 'Components/Notice',
  component: Notice,
}

const Template = (args) => <Notice {...args} />

export const Default = Template.bind({})
Default.args = {
  alert: {
    title: '',
    body: ['A standard alert.'],
    variant: 'warning',
  },
  buttonProps: {},
  dismissible: true,
  withBackButton: false,
}

export const Error = Template.bind({})
Error.args = {
  alert: {
    title: "We're sorry, something went wrong.",
    body: [
      JSON.stringify({
        message: 'There are instances where there may be several api errors on a single page. We would render them all.',
        name: 'First',
        status: 422,
      }, null, 2),
      JSON.stringify({
        message: 'This is a second error message.',
        name: 'Second',
        status: 422,
      }, null, 2),
      JSON.stringify({
        message: 'This is a third error message.',
        name: 'Third',
        status: 422,
      }, null, 2),
    ],
    variant: 'warning',
  },
  buttonProps: {
    onClick: () => console.log('click me!'),
    text: 'Click to return to the previous page.',
  },
  dismissible: false,
  withBackButton: true,
}

export const UnauthorizedUser = Template.bind({})
UnauthorizedUser.args = {
  alert: {
    title: 'Unauthorized',
    body: ['Please sign in to access this page.'],
    variant: 'info',
  },
  buttonProps: {},
  dismissible: false,
  withBackButton: false,
}
