import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import process from 'process'

import { PostItem } from '@/app/blog/_components/post-item'

interface PostsProps {
	searchParams: {
		tag?: string
	}
}

export const metadata: Metadata = {
	title: 'Blog - Seb. L.',
	description: 'Web developer & film photography enthusiast.',
	alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_DOMAIN_URL as string}/blog` },
}

export default function Posts ({ searchParams }: PostsProps) {
	const posts = allPosts
		.filter(post => !post.draft)
		.filter((post) => searchParams.tag
			? post.tags?.includes(searchParams.tag)
			: true)
		.sort((a, b) => {
			if (new Date(a.publishedAt) > new Date(b.publishedAt)) return -1

			return 1
		})

	return (
		<ul className='m-0 flex list-none flex-col divide-y divide-dashed divide-slate-200 p-0'>
			{posts.map((post) => (
				<PostItem
					key={post._id}
					post={post}
				/>
			))}
		</ul>
	)
}
