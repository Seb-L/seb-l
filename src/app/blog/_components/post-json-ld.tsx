import { Post } from 'contentlayer/generated'

export const PostJsonLd = ({ post, slug }: { post: Post, slug: string }) => (
	<script
		dangerouslySetInnerHTML={{
			__html: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'BlogPosting',
				headline: post.title,
				datePublished: new Date(post.publishedAt),
				dateModified: new Date(post.publishedAt),
				description: post.summary,
				inLanguage: 'en-US',
				image: {
					'@type': 'ImageObject',
					url: post.image
						? `${process.env.NEXT_PUBLIC_SITE_DOMAIN_URL}${post.image}`
						: `${process.env.NEXT_PUBLIC_SITE_DOMAIN_URL}/blog/og?slug=${slug}`,
				},
				url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN_URL}/${slug}`,
				author: {
					'@type': 'Person',
					name: 'Seb. L.',
					url: process.env.NEXT_PUBLIC_SITE_DOMAIN_URL,
				},
				publisher: {
					'@type': 'Organization',
					name: 'Seb. L.',
					logo: {
						'@type': 'ImageObject',
						url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN_URL}/images/seb-l.jpg`,
						width: 100,
						height: 100,
					},
				},
				genre: post.tags,
				keywords: post.tags,
			}),
		}}
		type='application/ld+json'
		suppressHydrationWarning
	/>
)
