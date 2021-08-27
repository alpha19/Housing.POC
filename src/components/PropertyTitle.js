import React from "react"
//import { NavLink } from "react-router-dom"

// styles
//					<NavLink 
//						to={ props.link }
//						activeClassName="active-link">
//						{ title }
//					</NavLink>

import styles from "./styles/CityTitle.module.css"

const PropertyTitle= props => {
	const { address, price} = props.property

	const title = "Address: " + address + ", Price: " + price
	return (
		<li className={ styles.item }>
			<div >
				<span>
					<h3>{ title } </h3>
				</span>
			</div>
		</li>
	)
}

export default PropertyTitle