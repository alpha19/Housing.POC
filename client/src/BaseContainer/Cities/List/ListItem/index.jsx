import React from "react"
import { useRouteMatch } from "react-router-dom"

import Icon from 'shared/components/Icon';

import { StyledCityListItem, StyledLink, StyledButton } from './styles'

import { getCities, getCity, deleteCity } from 'shared/utils/city';

const ListItem = props => {
	const match = useRouteMatch();
	const [city, setCity] = useState(getCity(props.id));

	const deleteCityAndUpdate = id => {
		deleteCity(id);
		props.setCities(getCities());
	 }

	return (
		<StyledListItem>
			<div>
				<span>
					<StyledButton
						onClick={() => deleteCityAndUpdate(id) }>
						<Icon type="trash" marginTop='2px' />
					</StyledButton>
					<StyledLink to={{
							pathname: `${match.url}/${city.city}/${city.state}`,
							cityProps: { city: city } 
						}}>
						{ city.city }
					</StyledLink>
				</span>
			</div>
		</StyledListItem>
	)
}

export default CityListItem