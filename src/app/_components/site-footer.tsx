import { ScrollToTop } from '@/app/_components/scroll-to-top'

export const SiteFooter = () => (
	<footer className='prose mx-auto flex flex-row items-center justify-between border-t py-4 max-sm:px-4'>
		<div className='text-xs'>
			{`© ${new Date().getFullYear()} Seb L.`}
		</div>

		<ScrollToTop/>
	</footer>
)
