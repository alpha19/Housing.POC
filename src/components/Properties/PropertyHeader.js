import React from "react"
import { NavLink } from "react-router-dom"

// styles
//					<NavLink 
//						to={ props.link }
//						activeClassName="active-link">
//						{ title }
//					</NavLink>

import styles from "./styles.css"

const PropertyHeader= props => {
	const { address, price, link} = props.property

	const title = address + " (Price: " + price + ")"
	return (
		<li className={ styles.item }>
			<div>
				<a href={link}>{title}</a>
			</div>
		</li>
	)
}

export default PropertyHeader