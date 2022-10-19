import React from 'react'
import { LoggedOut } from '../compounds/Header/Header.stories'
import { Alternate as Footer } from '../compounds/Footer/Footer.stories'
import { Alternate as Hero } from '../components/Image/Image.stories'
import { Alternate as ItemGroup } from '../compounds/ItemGroup/ItemGroup.stories'
import { Default as SearchBar } from '../components/SearchBar/SearchBar.stories'
import { Default as TitledTextBox } from '../compounds/TitledTextBox/TitledTextBox.stories'

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
