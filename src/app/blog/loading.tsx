import { PostItemSkeleton } from '@/app/blog/_components/post-item.skeleton'

const Loading = () => (
	<ul className='m-0 flex list-none flex-col divide-y divide-dashed divide-slate-200 p-0'>
		<PostItemSkeleton/>

		<PostItemSkeleton/>

		<PostItemSkeleton/>

		<PostItemSkeleton/>
	</ul>
)

export default Loading
