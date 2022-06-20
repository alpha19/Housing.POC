import React from "react"
import { useRouteMatch } from "react-router-dom"

import Icon from 'shared/components/Icon';

import { StyledListItem, StyledLink, StyledButton } from './styles'

import { getCity, deleteCity } from 'shared/utils/city';

const ListItem = ( { city, setCities } ) => {
	const match = useRouteMatch();

	const deleteCityAndRefresh = () => {
		deleteCity(city.id, setCities);
	 }

	return (
		<StyledListItem>
			<div>
				<span>
					<StyledButton onClick={() => deleteCityAndRefresh() } >
						<Icon type="trash" marginTop='2px' />
					</StyledButton>
					<StyledLink to={{pathname: `${match.url}/${city.id}`, state: { city: city.city } }}>{ city.city }</StyledLink>
				</span>
			</div>
		</StyledListItem>
	)
}

export default ListItem