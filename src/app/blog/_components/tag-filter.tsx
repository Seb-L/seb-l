import { X } from 'lucide-react'
import Link from 'next/link'

export const TagFilter = ({ tag }: { tag: string }) => (
	<div
		className='mb-1 inline-flex flex-row gap-1 rounded bg-gray-700 px-2 py-0.5 pr-1 text-xs font-light capitalize text-white no-underline'
	>
		{tag}

		<Link
			href={{ query: { tag: '' } }}
			className='flex items-center'
		>
			<X
				width={14}
				height={14}
				className='text-white'
			/>
		</Link>
	</div>
)
