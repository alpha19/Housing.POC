import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { FaTrash } from "react-icons/fa"

// styles
import styles from "./styles/CityTitle.module.css"

const CityTitle= props => {
	const { id, title } = props.city

	useEffect(() => {
	  return () => {
	    console.log("Cleaning up...")
	  }
	}, [])

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
						to={`/city/${title}`}
						activeClassName="active-link">
						{ title }
					</NavLink>
				</span>
			</div>
		</li>
	)
}

export default CityTitle