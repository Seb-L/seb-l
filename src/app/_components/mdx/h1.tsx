import { ComponentProps } from 'react'

export const H1 = ({ children, ...props }: ComponentProps<'h1'>) => (
	<h1
		{...props}
		className={`mb-2 bg-gradient-to-br from-[#ff0000] to-[#ffd000] bg-clip-text !text-transparent max-md:text-3xl ${props.className}`}
	>
		{children}
	</h1>
)
