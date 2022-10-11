import React from 'react'
import { LoggedOut } from './Header.stories'
import { Alternate as Footer } from './Footer.stories'
import { Alternate as Hero } from './Image.stories'
import { Alternate as ItemGroup } from './ItemGroup.stories'
import { Default as SearchBar } from './SearchBar.stories'
import { Default as TitledTextBox } from './TitledTextBox.stories'

const Home = () => (
	<main>
		<LoggedOut {...LoggedOut.args} />
		<Hero {...Hero.args} />
		<SearchBar {...SearchBar.args} />
		<TitledTextBox {...TitledTextBox.args} />
		<ItemGroup {...ItemGroup.args} />
		<Footer {...Footer.args} />
	</main>
)


export default {
	title: 'Example/Home Page',
	component: Home,
	parameters: {
		layout: 'fullscreen',
	},
}

export const HomePage = () => <Home />
