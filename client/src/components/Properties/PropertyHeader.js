import React from "react"

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