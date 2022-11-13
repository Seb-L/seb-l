'use client'

import { Dialog } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

export const Menu = ({ className }: { className?: string }) => {
	return (
		<ul className={`h-12 flex-row items-center gap-6 ${className}`}>
			<li>
				<Link href="/blog">
					Blog
				</Link>
			</li>

			<li>
				{/* <Link href="/who"> */}
				Who?

				{/* </Link> */}
			</li>

			<li>
				{/* <Link href="/contact"> */}
				Contact

				{/* </Link> */}
			</li>
		</ul>
	)
}

export const MenuMobile = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button
				className="color-black text-xl block md:hidden h-12"
				onClick={() => setIsOpen(isOpen => !isOpen)}
			>
				<Bars3Icon className="h-6 w-6" />
			</button>

			<Dialog
				open={isOpen}
				className="relative z-50"
				onClose={() => setIsOpen(false)}
			>
				<div
					className="fixed inset-0 bg-black/30"
					aria-hidden="true"
				/>

				<div className="fixed inset-0 flex items-center justify-center p-4">
					<Dialog.Panel className="w-full max-w-sm rounded bg-white">
						<Dialog.Title>
							Deactivate account
						</Dialog.Title>

						<Menu />
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	)
}
