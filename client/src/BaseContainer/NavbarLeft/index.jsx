import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import { Icon } from 'shared/components';

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

import { NavLeft, Link, Bottom, Item, ItemText } from './styles'

const NavBarLeft = () => {
	const links = [
		{
			id: 1,
			path: "/",
			text: "Home",	
			icon: "home"
		},
		{
			id: 2,
			// TODO: Implement modality to add city
			path: "/",
			text: "Add",
			icon: "plus"
		},
		{
			id: 3,
			path: "/about",
			text: "About",
			icon: "help"
		}
	]

	return (
		<NavLeft>
			{ links.map( link => {
				return (
					<Link
						key={ link.id }
						to={ link.path } 
						exact>
						<Item>
							<Icon type={ link.icon } size={25} />
							<ItemText>{ link.text}</ItemText>
						</Item>
					</Link>
				)
			})}
		</NavLeft>
	)
}


export default NavBarLeft