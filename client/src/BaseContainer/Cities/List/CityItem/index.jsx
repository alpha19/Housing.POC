import React from "react"
import { useRouteMatch } from "react-router-dom"

import Icon from 'shared/components/Icon';

import { StyledCityItem, StyledLink, StyledButton } from './styles'

const CityItem= props => {
	const match = useRouteMatch();
	const { id, cityName, stateName } = props.city

	return (
		<StyledCityItem>
			<div>
				<span>
					<StyledButton
						onClick={() => props.deleteCity(id)}>
						<Icon type="trash" marginTop='2px' />
					</StyledButton>
					<StyledLink to={{
							pathname: `${match.url}/${cityName}/${stateName}`,
							cityProps: { city: props.city } 
						}}>
						{ cityName }
					</StyledLink>
				</span>
			</div>
		</StyledCityItem>
	)
}

export default CityItem