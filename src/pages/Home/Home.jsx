import React, { useState } from 'react'
import { SearchBar } from '../../components'
import { TitledTextBox, FeaturedServices, Header } from '../../compounds'
import { text, onChange, services } from '../../resources/args'
import './home.css'

const Home = () => {
	const [user, setUser] = useState()

	return (
		<main>
			<Header
				user={user}
				onLogin={() => setUser({ name: 'Jane Doe' })}
				onLogout={() => setUser(undefined)}
			/>
			<SearchBar onChange={onChange}/>
			<TitledTextBox size={'medium'} text={text} title={'About Us'} />
			<FeaturedServices services={services} />
		</main>
	)
}

export default Home
