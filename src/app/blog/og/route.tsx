import { allPosts } from 'contentlayer/generated'
import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export const GET = async (req: NextRequest) => {
	const { searchParams } = req.nextUrl
	const slug = searchParams.get('slug')

	const post = allPosts.find((post) => post.slug === `blog/${slug}`)

	const fontInterLight = fetch(new URL('../../../../public/fonts/Inter-Light.ttf', import.meta.url))
		.then((res) => res.arrayBuffer())

	const bgUrl = post?.image
		? `${process.env.NEXT_PUBLIC_SITE_DOMAIN_URL}${post?.image}`
		: `${process.env.NEXT_PUBLIC_SITE_DOMAIN_URL}/images/base-og.png`

	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'flex-end',
					backgroundColor: 'white',
					backgroundImage: `url(${bgUrl})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: 50,
						backgroundColor: 'white',
						borderRadius: 20,
						margin: 50,
						gap: 40,
						maxWidth: '60%',
					}}
				>
					<div
						style={{
							display: 'flex',
							fontSize: 80,
							fontFamily: 'fontInterLight',
							fontStyle: 'normal',
							whiteSpace: 'pre-wrap',
							backgroundClip: 'text',
							background: 'linear-gradient(45deg, #ff0000, #ffd000)',
							color: 'transparent',
						}}
					>
						{post?.title}
					</div>

					<div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
						{post?.tags?.map(tag => (
							<div
								key={tag}
								style={{
									backgroundColor: 'rgb(55, 65, 81)',
									color: 'white',
									borderRadius: 10,
									fontSize: 40,
									fontFamily: 'fontInterLight',
									padding: '10px 20px',
									textTransform: 'capitalize',
								}}
							>
								{`# ${tag}`}
							</div>
						))}
					</div>
				</div>
			</div>
		),
		{
			width: 1920,
			height: 1080,
			fonts: [
				{
					name: 'fontInterLight',
					data: await fontInterLight,
					style: 'normal',
				},
			],
		}
	)
}
