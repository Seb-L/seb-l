import Link from 'next/link'

interface TagsListProps {
	tags: string[]
}

export const TagsList = ({ tags }: TagsListProps) => (
	<div className='m-0 flex flex-row gap-2'>
		{tags.map((tag) => (
			<Link
				key={tag}
				href={{ pathname: '/blog', query: { tag } }}
				className='inline rounded bg-slate-400 px-2 py-0.5 text-[10px] font-light capitalize text-white no-underline'
			>
				{`# ${tag}`}
			</Link>
		))}
	</div>
)
