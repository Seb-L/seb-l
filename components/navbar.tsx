import { Menu, MenuMobile } from './menu'

export const Navbar = () => {
	return (
		<nav className="sticky top-0 bg-white flex flex-row items-center px-6">
			<a className="mr-auto font-bold">
				Seb.L.
			</a>

			<Menu className="hidden md:flex" />

			<MenuMobile />
		</nav>
	)
}
