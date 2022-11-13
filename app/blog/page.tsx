import { allPosts } from 'contentlayer/generated'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

const BlogSummary = () => {
	const posts = allPosts
		.filter(post => !post.draft)

	return (
		<>
			<ul className="grid grid-cols-4 gap-4">
				{posts.map(post => (
					<Link
						key={post._id}
						href={`/blog/${post.slug}`}
						className="border rounded bg-white"
					>
						{post.cover && (
							<header className='w-full h-28 relative overflow-hidden rounded-t'>
								<Image
									src={post.cover}
									alt={post.title}
									fill
									sizes="(max-width: 768px) 100vw"
									style={{ objectFit: 'cover' }}
								/>
							</header>
						)}

						<footer className='px-4 py-2'>
							<h2 className='font-bold'>
								{post.title}
							</h2>

							<div className='text-xs text-gray-400'>
								{dayjs(post.date).format('DD/MM/YYYY')}
							</div>
						</footer>
					</Link>
				))}
			</ul>
		</>
	)
}

export default BlogSummary
