import React from 'react'
import TextBox from './TextBox'
import { multipleParagraphs, singleParagraph } from '../../resources/args'

export default {
  title: 'Components/TextBox',
  component: TextBox,
}

const Template = (args) => <TextBox {...args} />

export const Default = Template.bind({})
Default.args = {
  alignment: 'left',
  text: singleParagraph,
  size: 'small',
}

export const Alternate = Template.bind({})
Alternate.args = {
  alignment: 'left',
  text: multipleParagraphs,
  size: 'medium',
}
