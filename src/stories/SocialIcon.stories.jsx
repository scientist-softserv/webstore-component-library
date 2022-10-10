import React from 'react'
import { SocialIcon } from '../components'

export default {
	title: 'Components/SocialIcon',
	component: SocialIcon,
}

const Template = (args) => <SocialIcon {...args} />

export const Twitter = Template.bind({})
Twitter.args = {
	height: 0,
	icon: 'twitter',
	url: 'www.twitter.com',
}

