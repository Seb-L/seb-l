export const PostItemSkeleton = () => (
	<li className='m-0 flex w-full flex-row items-center gap-8 p-0 py-8 no-underline'>
		<div className={'m-0 flex flex-1 shrink-0 flex-col gap-4'}>
			<div className={'flex flex-col gap-2'}>
				<div className={'h-[24px] w-[300px] animate-pulse rounded bg-slate-300'}/>

				<div className={'h-[24px] w-[180px] animate-pulse rounded bg-slate-300'}/>

				<div className={'h-[24px] w-[75%] animate-pulse rounded bg-slate-300'}/>
			</div>

			<div className={'h-[14px] w-[132px] animate-pulse rounded bg-slate-300'}/>

			<div className={'flex flex-row gap-2'}>
				<div className={'h-[21px] w-[73px] animate-pulse rounded bg-slate-300'}/>

				<div className={'h-[21px] w-[73px] animate-pulse rounded bg-slate-300'}/>
			</div>
		</div>

		<div className={'h-[150px] w-[250px] animate-pulse rounded-lg bg-slate-300'}/>
	</li>
)
