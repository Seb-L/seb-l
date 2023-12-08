import { allPosts } from 'contentlayer/generated'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

import { TagsList } from '@/app/_components/tags-list'

export const PostItem = ({ post }: { post: typeof allPosts[0] }) => (
	<li className='m-0 flex w-full flex-row items-center gap-8 p-0 py-8 no-underline'>
		<div className={'m-0 flex-1 shrink-0'}>
			<Link
				href={`/${post.slug}`}
				title={post.title}
				className='m-0 mb-2 block no-underline'
			>
				<h2 className='mb-2 mt-0 bg-gradient-to-br from-[#ff0000] to-[#ffd000] bg-clip-text text-2xl !font-light leading-8 !text-transparent'>
					<Balancer>
						{post.title}
					</Balancer>
				</h2>

				<div className='text-sm font-light italic text-gray-400'>
					{dayjs(post.publishedAt).format('LL')}
				</div>
			</Link>

			{!!post.tags?.length && <TagsList tags={post.tags}/>}
		</div>

		{!!post.image && (
			<Link
				href={`/${post.slug}`}
				title={post.title}
				className='m-0 block no-underline max-md:hidden'
			>
				<Image
					src={post.image}
					alt={post.title}
					width={250}
					height={150}
					className={'m-0 block rounded-lg'}
				/>
			</Link>
		)}
	</li>
)
