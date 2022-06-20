import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"

import { StyledCities } from './styles'

import Input from './Input'
import List from './List'

import { getCities } from 'shared/utils/city';

const Cities = () => {
  const [cities, setCities] = getCities();

  return (
    <StyledCities>
    	<Input setCities = { setCities } />
      	<List cities = { cities } setCities = { setCities } />
    </StyledCities>
  )
}

export default Cities