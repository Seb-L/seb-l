import Image from 'next/image'

import { H1 } from '@/app/_components/mdx/h1'

const introBody = [
	'I\'m Seb and I am currently <strong>Head of Engineering front-end and mobile</strong> at <a href="https://www.cocoon-space.com/" target="_blank" rel="noreferrer">Cocoon Space</a> since 2022 in Paris, France.',
	'I\'m into <a href="https://www.instagram.com/seb.l.photo/" target="_blank">film photography</a>, vinyl records, veggie food, tattoos and cats.',
	'I was making <a href="https://open.spotify.com/artist/65sE0Yi64jgnzLTUZRbrxv?si=-VXNpHFDTX2LnCr2duRTYg">post-rock music</a> between 2006 and 2009.',
]

const stack = [
	'Javascript/TypeScript',
	'React/NextJs',
	'Tailwind/Radix Primitives',
	'NestJS/Graphql/TypeOrm',
	'Vitest/Playwright/mswjs',
	'Storybook',
]

const exp = [
	{
		date: '2022/----',
		title: 'Head of Engineering front-end / mobile',
		company: 'Cocoon Space',
	},
	{ date: '2019/2022', title: 'Lead front-end developer', company: 'ABBD' },
	{ date: '2018/2019', title: 'Lead front / Team Lead', company: 'Agorize' },
	{
		date: '2015/2018',
		title: 'Front-end developer / Lead front-end developer',
		company: 'Numberly',
	},
	{ date: '2014/2015', title: 'Front-end developer', company: 'Wakanda(4D)' },
	{ date: '2009/2014', title: 'Graphic Designer', company: 'LPG Systems' },
	{
		date: '2004/2006',
		title: 'Sound Technician',
		company: 'Palais des festivals et des congrès de Cannes',
	},
]

export default function Posts () {
	return (
		<div className={'py-12'}>
			<section className='mb-8 md:grid md:grid-cols-3 md:items-center md:gap-8'>
				<div className='hidden shrink-0 md:block'>
					<Image
						src='/images/seb-l.jpg'
						alt={''}
						width={195}
						height={195}
						className='m-0 block rounded-lg'
					/>
				</div>

				<div className='md:col-span-2'>
					<H1 className='mt-6'>
						Hi there
						<span className='ml-2 text-black'>
							👋
						</span>
					</H1>

					<p dangerouslySetInnerHTML={{ __html: introBody[0] }}/>
				</div>
			</section>

			<ul className='mb-8 list-disc text-sm'>
				{introBody.filter((_, i) => i > 0).map(txt => (
					<li
						key={txt}
						dangerouslySetInnerHTML={{ __html: txt }}
					/>
				))}
			</ul>

			<div className='md:grid md:grid-cols-3 md:items-start md:gap-12'>
				<section className='col-span-2'>
					<h2 className='mt-0'>
						Experiences
					</h2>

					<ul className='list-disc text-sm'>
						{exp.map((ex) => (
							<li key={ex.date}>
								<strong>
									{`${ex.date}: `}
								</strong>

								{`${ex.title} @ ${ex.company}`}
							</li>
						))}
					</ul>
				</section>

				<section>
					<h2 className='mt-0'>
						Stack
					</h2>

					<ul className='list-disc text-sm'>
						{stack.map(techno => (
							<li key={techno}>
								{techno}
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	)
}
