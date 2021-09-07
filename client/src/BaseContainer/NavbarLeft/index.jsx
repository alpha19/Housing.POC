import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

import { NavBar, NavBarButton } from './styles'

const NavBarLeft = () => {
	const links = [
		{
			id: 1,
			path: "/",
			text: "Home",	
		},
		{
			id: 2,
			path: "/about",
			text: "About",
		}
	]

	const [navbarOpen, setNavbarOpen] = useState(false)

	const handleToggle = () => {
		setNavbarOpen(prev => !prev)
	}

	const showStyle = { width: "100%" }

	return (
		<NavBar>
			<NavBarButton onClick={ handleToggle }>{ navbarOpen ? (
					<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
				) : (
					<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
				)}
				<ul className={`menuNav ${navbarOpen ? " showStyle" : ""}`}>
				{ links.map(link => {
					return (
						<li key={ link.id }>
							<NavLink 
								to={ link.path } 
								activeClassName="active-link"
								onClick={ () => handleToggle()} 
								exact>
								{ link.text }
							</NavLink>
						</li>
					)
				})}
			</ul>
			</NavBarButton>
		</NavBar>
	)
}

export default NavBarLeft