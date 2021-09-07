import React from "react"
import { Link,  useRouteMatch } from "react-router-dom"
import { FaTrash } from "react-icons/fa"

import { StyledCityItem } from './styles'

const CityItem= props => {
	const match = useRouteMatch();
	const { id, cityName, stateName } = props.city

	return (
		<StyledCityItem>
			<div>
				<span>
					<button
						onClick={() => props.deleteCity(id)}>
						<FaTrash style={{color: "orangered", fontSize: "16px"}}
						 />
					</button>
					<Link to={{
							pathname: `${match.url}/${cityName}/${stateName}`,
							cityProps: { city: props.city } 
						}}>
						{ cityName }
					</Link>
				</span>
			</div>
		</StyledCityItem>
	)
}

export default CityItem