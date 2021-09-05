import React from "react"

const Listing= props => {
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

export default Listing