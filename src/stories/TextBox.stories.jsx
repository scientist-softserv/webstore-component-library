import React from 'react'
import { TextBox } from '../components'
import { paragraph_four } from '../resources/args'

export default {
	title: 'Components/TextBox',
	component: TextBox,
}

const Template = (args) => <TextBox {...args} />

export const Default = Template.bind({})
Default.args = {
	alignment: 'left',
	text: paragraph_four,
	size: 'small',
}
