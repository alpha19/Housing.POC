import React, { useState } from "react"

import { StyledCityForm, StyledCityInput, StyledCityButton } from './styles'

import Icon from 'shared/components/Icon';

import { addCity } from 'shared/utils/city';

const Input = ( { setCities } ) => {
  const [cityInput, setCityInput] = useState("")

  const onCityInputChange = e => {
    setCityInput(e.target.value);
  }

  const validateCitySubmission = () => {
    if (!cityInput.trim()) { return false; }

    let cityAndState = cityInput.split(',').map(element => element.trim());;
    if (cityAndState.length !== 2) { return false; }

    const [city, state] = cityAndState;
    if (state.length !== 2) { return false; }

    return true;
  }

  const handleNewCitySubmission = e => {
    e.preventDefault()

    if (!validateCitySubmission()) { 
      alert("Input must be a city name and state abbreviation separated by commas. State abbreviation must be two characters")
      return; 
    }

    let city, state;
    [city, state] = cityInput.split(',').map(element => element.trim());

    addCity(city, state, setCities);
    setCityInput("");
  }

  return (
    <StyledCityForm onSubmit={ handleNewCitySubmission }>
      <StyledCityInput
        type="text"
        placeholder="Add city and state (separated by comma)..."
        value= { cityInput }
        onChange={ onCityInputChange }
      />
      <StyledCityButton className="input-submit">
        <Icon type="plus" marginTop='2px' />
      </StyledCityButton>
    </StyledCityForm>
  )
}

export default Input