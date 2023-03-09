import React from "react"
import { HiMenuAlt4, HiOutlineShoppingBag } from "react-icons/hi"
import { FiSearch } from "react-icons/fi"

function Navbar() {
	return (
		<>
			<div className='header'>
				<nav className='containerHeader'>
					<div className='menuSearch'>
						<div className='menu_icon'>
							<HiMenuAlt4 />
						</div>
						<FiSearch />
					</div>
					<div className='logo'>nummo</div>
					<div className='accountAndCart'>
						<a href=''>Konto</a>
						<HiOutlineShoppingBag />
					</div>
				</nav>
			</div>
		</>
	)
}

export default Navbar
