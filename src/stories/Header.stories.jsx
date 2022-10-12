import React from 'react'
import { Header } from '../components'
import { Header } from '../compounds'
import logoFull from '../assets/img/logo-full.png'

export default {
	title: 'Components/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
}

const Template = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
	browseLink: '',
	logInLink: '',
	logo: logoFull,
	logOutLink: '',
	requestsLink: '',
	user: {
		name: 'Aaliyah Haughton',
	},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
	browseLink: '',
	logInLink: '',
	logo: logoFull,
	logOutLink: '',
	requestsLink: '',
	user: null,
}
