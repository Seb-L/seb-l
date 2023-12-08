import { Analytics } from '@vercel/analytics/react'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import * as process from 'process'
import { PropsWithChildren } from 'react'

import { Navbar } from '@/app/_components/navbar'
import { SiteFooter } from '@/app/_components/site-footer'

import './globals.css'

dayjs.extend(localizedFormat)

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Seb. L.',
	description: 'Web developer & film photography enthusiast.',
	alternates: { canonical: process.env.NEXT_PUBLIC_SITE_DOMAIN_URL as string },
}

export default function RootLayout ({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>

				<link
					rel='manifest'
					href='/site.webmanifest'
				/>
			</head>

			<body className={inter.className}>
				<Navbar/>

				<main className='prose mx-auto prose-headings:font-semibold prose-headings:text-slate-600 max-md:px-8'>
					{children}
				</main>

				<SiteFooter/>

				<Analytics/>
			</body>
		</html>
	)
}
