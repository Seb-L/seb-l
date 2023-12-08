'use client'

import { ArrowUpFromLine } from 'lucide-react'

export const ScrollToTop = () => (
	<button
		onClick={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}
	>
		<ArrowUpFromLine
			width={14}
			height={14}
		/>
	</button>
)
