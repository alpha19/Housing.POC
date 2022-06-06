import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"

import { StyledCities } from './styles'

import Input from './Input'
import List from './List'

import { v4 as uuidv4 } from "uuid"

import { getCities } from 'shared/utils/city';

const Cities = () => {
  const [cities, setCities] = useState(getCities())

  return (
    <StyledCities>
      <Input setCities = { setCities } />
      <List setCities = { setCities } />
    </StyledCities>
  )
}

export default Cities