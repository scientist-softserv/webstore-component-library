import React from 'react'
import LinkGroup from './LinkGroup'
import { links } from '../../resources/args'

export default {
  title: 'Compounds/LinkGroup',
  component: LinkGroup,
}

const Template = (args) => <LinkGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  header: 'Header',
  links,
}

export const Alternate = Template.bind({})
Alternate.args = {
  header: 'Header',
  headerStyle: { fontSize: 13, color: '#EC88EE' },
  links,
  linkStyle: { fontSize: 13, color: '#5E5CCF' },
}
