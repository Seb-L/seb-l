import '../styles/globals.css'
import { Navbar } from '../components/navbar'

interface Props {
	children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
	return (
		<html lang='en'>
			<head>
				<title>
					Seb.L.
				</title>

				<meta
					name='description'
					content=''
				/>

				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</head>

			<body>
				<Navbar />

				<main className="container mx-auto py-6">
					{children}
				</main>
			</body>
		</html>
	)
}

export default RootLayout
