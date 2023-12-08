'use client'

import { Github, Instagram, Linkedin } from 'lucide-react'
import { Caveat } from 'next/font/google'
import Link from 'next/link'

import { MenuBtn } from '@/app/_components/menu-btn'
import { XIcon } from '@/app/_components/x-icon'

const caveat = Caveat({ subsets: ['latin'] })

export const Navbar = () => {
	return (
		<nav
			className='prose sticky top-0 z-20 mx-auto flex h-[60px] flex-row items-center gap-8 border-b bg-white text-black dark:bg-black dark:text-white max-sm:px-4'
		>
			<Link
				href='/'
				className={`text-2xl font-bold italic no-underline ${caveat.className}`}
			>
				Seb. L.
			</Link>

			<ul className='m-0 ml-auto flex list-none flex-row items-center gap-8 p-0 text-sm'>
				<li>
					<MenuBtn href='/blog'>
						Blog
					</MenuBtn>
				</li>

				<li>
					<MenuBtn href='/who'>
						Who?
					</MenuBtn>
				</li>
			</ul>

			<ul className='m-0 flex list-none flex-row items-center gap-2 p-0 text-sm'>
				<li>
					<MenuBtn
						href='https://github.com/Seb-L'
						target='_blank'
					>
						<Github
							width={16}
							height={16}
						/>
					</MenuBtn>
				</li>

				<li>
					<MenuBtn
						href='https://www.linkedin.com/in/sebastienlombard/'
						target='_blank'
					>
						<Linkedin
							width={16}
							height={16}
						/>
					</MenuBtn>
				</li>

				<li>
					<MenuBtn
						href='https://www.instagram.com/seb.l.photo/'
						target='_blank'
					>
						<Instagram
							width={16}
							height={16}
						/>
					</MenuBtn>
				</li>

				<li>
					<MenuBtn
						href='https://www.x.com/seb_l_'
						target='_blank'
					>
						<XIcon
							width={16}
							height={16}
						/>
					</MenuBtn>
				</li>
			</ul>
		</nav>
	)
}
