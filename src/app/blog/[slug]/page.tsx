import { allPosts } from 'contentlayer/generated'
import dayjs from 'dayjs'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import process from 'process'
import Balancer from 'react-wrap-balancer'

import { Mdx } from '@/app/_components/mdx'
import { H1 } from '@/app/_components/mdx/h1'
import { TagsList } from '@/app/_components/tags-list'
import { PostJsonLd } from '@/app/blog/_components/post-json-ld'

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata | undefined> => {
	const post = allPosts
		.filter(post => !post.draft)
		.find((post) => post.slug === `blog/${params.slug}`)

	if (!post) return

	const {
		title,
		slug,
		summary: description,
		publishedAt: publishedTime,
	} = post

	const ogImage = `${process.env.NEXT_PUBLIC_SITE_DOMAIN_URL}/blog/og?slug=${params.slug}`

	const openGraph = {
		title,
		description,
		type: 'article',
		publishedTime,
		url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN_URL}/${slug}`,
		images: [{ url: ogImage }],
	}

	const twitter = {
		card: 'summary_large_image',
		title,
		description,
		images: [ogImage],
	}

	return {
		title,
		description,
		openGraph,
		twitter,
		alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_DOMAIN_URL as string}/${slug}` },
	}
}

const Page = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find((post) => post.slug === `blog/${params.slug}`)

	if (!post) notFound()

	return (
		<article className={'py-12'}>
			<PostJsonLd
				post={post}
				slug={params.slug}
			/>

			<header className='mb-8'>
				{!!post.image && (
					<Image
						src={post.image}
						alt={post.title}
						width={1500}
						height={650}
						className='m-0 mb-4 rounded-lg border'
					/>
				)}

				<H1>
					<Balancer>
						{post.title}
					</Balancer>
				</H1>

				<div className='mb-2 text-sm font-light italic text-gray-400'>
					{dayjs(post.publishedAt).format('LL')}
				</div>

				{!!post.tags?.length && <TagsList tags={post.tags}/>}
			</header>

			<Mdx code={post.body.code}/>
		</article>
	)
}

export default Page
