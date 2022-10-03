import React, { useState } from 'react'
import { SearchBar } from '../components'
import { TitledTextBox, FeaturedServices, Header } from '../compounds'
import { paragraph_four, onChange, four_services } from '../resources/args'

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
			<TitledTextBox size={'medium'} text={paragraph_four} title={'About Us'} />
			<FeaturedServices services={services} />
		</main>
	)
}

export default Home
