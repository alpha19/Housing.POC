import React from "react"
import { NavLink } from "react-router-dom"
import { FaTrash } from "react-icons/fa"

// styles
import styles from "./styles.css"

const CityTitle= props => {
	const { id, cityName, stateName } = props.city

	return (
		<li className={ styles.item }>
			<div >
				<span>
					<button
						onClick={() => props.deleteCity(id)}>
						<FaTrash style={{color: "orangered", fontSize: "16px"}}
						 />
					</button>
					<NavLink 
						to={{
							pathname: `/city/${cityName}/${stateName}`,
							city: { props.city }
						}}
						activeClassName="active-link">
						{ cityName }
					</NavLink>
				</span>
			</div>
		</li>
	)
}

export default CityTitle