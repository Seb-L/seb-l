import type { AppProps } from 'next/app'

import '../styles/globals.css'
import { Navbar } from '../components/navbar'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Navbar />

			<div className="container mx-auto py-6">
				<Component {...pageProps} />
			</div>
		</>
	)
}

export default App
