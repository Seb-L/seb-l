import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: 'blog/**/*.mdx',
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		draft: { type: 'boolean' },
		publishedAt: {
			type: 'string',
			required: true,
		},
		summary: {
			type: 'string',
			required: true,
		},
		image: { type: 'string' },
		tags: { type: 'list', of: { type: 'string' } },
	},
	computedFields: {
		slug: {
			type: 'string',
			resolve: (doc) => doc._raw.flattenedPath,
		},
	},
}))

export default makeSource({
	contentDirPath: 'src/content',
	documentTypes: [Post],
	mdx: {
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: 'dracula-soft',
					// theme: 'one-dark-pro',
					onVisitLine (node: any) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }]
						}
					},
					onVisitHighlightedLine (node: any) {
						node.properties.className.push('line--highlighted')
					},
					onVisitHighlightedWord (node: any) {
						node.properties.className = ['word--highlighted']
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{ properties: { className: ['anchor'] } },
			],
		],
	},
})
