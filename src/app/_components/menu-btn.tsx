'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

export const MenuBtn = (props: ComponentProps<typeof Link>) => {
	const pathname = usePathname()

	const activeClasses = pathname.includes(props.href as string)
		? 'border-b-4 border-b-slate-300'
		: 'border-b-transparent'

	return (
		<Link
			{...props}
			className={`border-b-4 py-1 no-underline hover:border-b-slate-300 ${activeClasses} ${props.className || ''}`}
		/>
	)
}
