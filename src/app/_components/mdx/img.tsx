import { ComponentProps } from 'react'

export const Img = (props: ComponentProps<'img'>) => (
	<img
		{...props}
		className='m-0 block rounded-lg border p-0'
	/>
)
