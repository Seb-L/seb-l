import { useMDXComponent } from 'next-contentlayer/hooks'

import { CustomLink } from './custom-link'
import { H1 } from './h1'
import { Img } from './img'

const mdxComponents = {
	a: CustomLink,
	h1: H1,
	img: Img,
}

export const Mdx = ({
	code,
	globals,
}: {
	code: Parameters<typeof useMDXComponent>[0];
	globals?: Parameters<typeof useMDXComponent>[1];
}) => {
	const MDXContent = useMDXComponent(code, globals)

	return <MDXContent components={mdxComponents}/>
}
