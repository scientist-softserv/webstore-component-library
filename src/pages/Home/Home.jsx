import React, { useState } from 'react'
import { SearchBar } from '../../components'
import { AboutUs, FeaturedServices, Header } from '../../compounds'
import { companyDescription, onChange, services } from '../../resources/args'
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
			<AboutUs companyDescription={companyDescription} />
			<FeaturedServices services={services} />
		</main>
	)
}

export default Home
