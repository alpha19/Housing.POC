import React from "react"
import { useParams } from "react-router-dom"

// styles

const CityDetail= props => {
	let { title } = useParams()

	return (
		<div className="container">
			<div className="inner">
				<header>
					<h1>{title}</h1>
				</header>
			</div>
		</div>
	)
}

export default CityDetail