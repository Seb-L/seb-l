import { allPosts } from 'contentlayer/generated'
import { MetadataRoute } from 'next'
import * as process from 'process'

export default function sitemap (): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_DOMAIN_URL as string

	const posts = allPosts
		.filter(post => !post.draft)
		.sort((a, b) => {
			if (new Date(a.publishedAt) > new Date(b.publishedAt)) return -1

			return 1
		})
		.map(post => ({
			url: `${baseUrl}/${post.slug}`,
			lastModified: new Date(post.publishedAt),
			changeFrequency: 'weekly' as MetadataRoute.Sitemap[0]['changeFrequency'],
			priority: 0.5,
		}))

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		...posts,
		{
			url: `${baseUrl}/who`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	]
}
