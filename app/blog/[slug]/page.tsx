import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

import 'styles/prism-dracula-theme.css'

interface Props {
	params: { slug: string },
}

const PostPage = ({ params }: Props) => {
	const post = allPosts.find((post) => post.slug === params.slug)
	const MDXContent = useMDXComponent(post?.body.code!)

	if (post) {
		return (
			<div className="prose mx-auto">
				{post.cover && (
					<header className='w-full h-[300px] relative overflow-hidden rounded-t mb-4'>
						<Image
							src={post.cover}
							alt={post.title}
							fill
							sizes="(max-width: 768px) 100vw"
							style={{ objectFit: 'cover' }}
						/>
					</header>
				)}

				<h1>
					{post?.title}
				</h1>

				<MDXContent />
			</div>
		)
	} else {
		return <></>
	}
}

export default PostPage
