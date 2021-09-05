import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"

import { StyledCities } from './styles'

import Input from './Input'
import List from './List'

import { v4 as uuidv4 } from "uuid"

const Cities = () => {
  const [cities, setCities] = useState(getInitialCities())

  function getInitialCities() {
  	const temp = localStorage.getItem("cities")
  	const savedCities = JSON.parse(temp)
  	return savedCities || []
  }

  const deleteCity = id => {
    setCities([
      ...cities.filter(city => {
        return city.id !== id
      }),
    ])
  }

  const addCityItem = (city, state) => {
    const newCity = {
      id: uuidv4(),
      cityName: city,
      stateName: state,
    }
    setCities([...cities, newCity])
  }

  const updateCity = (updatedCityName, updatedStateName, id) => {
    setCities(
      cities.map(city => {
        if (city.id === id) {
          city.cityName = updatedCityName
          city.updatedStateName = updatedStateName
        }
        return city
      })
    )
  }

  useEffect(() => {
  	const temp = JSON.stringify(cities)
  	localStorage.setItem("cities", temp)
  }, [cities])

  return (
    <StyledCities>
      <Input addCityProps={ addCityItem } />
      <List
        cities={ cities }
        deleteCity={ deleteCity }
        updateCity={ updateCity }
      />
    </StyledCities>
  )
}

export default Cities