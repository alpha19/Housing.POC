import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { FaTrash } from "react-icons/fa"

// styles
import styles from "./styles/CityItem.module.css"

const CityItem = props => {
	const [editing, setEditing] = useState(false)

	const handleEditing = () => {
		setEditing(true)
	}

	const handleUpdateDone = event => {
		if(event.key === "Enter") {
			setEditing(false)
		}
	}

	const { id, title } = props.city

	let viewMode = {}
	let editMode = {}

	if (editing) {
	  viewMode.display = "none"
	} else {
	  editMode.display = "none"
	}

	useEffect(() => {
	  return () => {
	    console.log("Cleaning up...")
	  }
	}, [])

	return (
		<li className={ styles.item }>
			<div onDoubleClick={handleEditing} style={ viewMode }>
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
			<input
			 	type="text" 
			 	style={ editMode } 
			 	className={styles.textInput} 
			 	value={ title }
			 	onChange={ e => {
			 		props.updateCity(e.target.value, id)
			 	}}
			 	onKeyDown={handleUpdateDone}
			 />
		</li>
	)
}

export default CityItem