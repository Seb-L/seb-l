import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrism from 'rehype-prism-plus'
import slugify from 'slugify'

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: 'blog/**/*.mdx',
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			description: 'The title of the post',
			required: true,
		},
		date: {
			type: 'date',
			description: 'The date of the post',
			required: true,
		},
		draft: { type: 'boolean' },
		cover: {
			type: 'string',
			description: 'The image cover',
			required: true,
		},
	},
	computedFields: {
		slug: {
			type: 'string',
			resolve: (doc) => slugify(doc.title).toLowerCase(),
		},
	},
}))

export const Pages = defineDocumentType(() => ({
	name: 'Page',
	filePathPattern: 'pages/**/*.md',
	fields: {
		title: {
			type: 'string',
			description: 'The title of the post',
			required: true,
		},
		date: {
			type: 'date',
			description: 'The date of the post',
			required: true,
		},
		draft: { type: 'boolean' },
		cover: {
			type: 'string',
			description: 'The image cover',
			required: true,
		},
	},
	computedFields: {
		slug: {
			type: 'string',
			resolve: (doc) => slugify(doc.title).toLowerCase(),
		},
	},
}))

const contentLayerConfig = makeSource({
	contentDirPath: 'content',
	documentTypes: [Post, Pages],
	mdx: { rehypePlugins: [rehypePrism] },
})

export default contentLayerConfig
