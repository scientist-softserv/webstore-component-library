import React from 'react'
import Link from './Link'

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  href: '/',
  label: 'I am a link',
  style: {},
}

export const Alternate = Template.bind({})
Alternate.args = {
  href: '/',
  icon: 'fa-envelope',
  label: 'No underline!',
  style: {
    textDecoration: 'none',
    color: '#AB1289',
  },
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  href: '/',
  icon: 'fa-download',
  label: '',
  style: {},
}

export const ExternalLinkInNewTab = Template.bind({})
ExternalLinkInNewTab.args = {
  href: 'https://www.google.com',
  label: 'I should open in a new tab',
  style: {},
  target: '_blank'
}
