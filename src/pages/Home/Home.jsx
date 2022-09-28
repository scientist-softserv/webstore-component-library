import React from 'react'
import { SearchBar, Title } from '../../components'
import { AboutUs, FeaturedServices, Header } from '../../compounds'
import './home.css'

const Home = () => {
	const [user, setUser] = React.useState()

	return (
		<main>
			{/* <Header
				user={user}
				onLogin={() => setUser({ name: 'Jane Doe' })}
				onLogout={() => setUser(undefined)}
				onCreateAccount={() => setUser({ name: 'Jane Doe' })}
			/> */}

			<SearchBar />
			<AboutUs />
			<FeaturedServices />
		</main>
	)
}

export default Home
