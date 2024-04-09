import Link from "next/link";

export default function PageHeader() {
	return (
		<div className='flex flex-row items-center pb-10'>
			<div className='mr-10 text-4xl font-semibold'>JOI</div>
			<Link href='/' className='mr-10'>
				<h2 className={`mb-2 text-xl font-semibold`}>首页</h2>
				<p className={`m-0 text-sm opacity-50`}>go home</p>
			</Link>

			<Link href='/docs' className='mr-10'>
				<h2 className={`mb-2 text-xl font-semibold`}>文档</h2>
				<p className={`m-0 text-sm opacity-50`}>使用方式</p>
			</Link>

			<Link
				href=''
				className='mr-10'
				target='_blank'
				rel='noopener noreferrer'
			>
				<h2 className={`mb-2 text-xl font-semibold`}>Github</h2>
				<p className={`m-0 text-sm opacity-50`}>参与贡献吧</p>
			</Link>
		</div>
	);
}
