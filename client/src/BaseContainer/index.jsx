import React, { useState, useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import { Container, Header, BaseDiv } from './styles';

import NavBarLeft from './NavBarLeft'
import Cities from './Cities'
import City from './City'

import About from 'About'

const BaseContainer = () => {
  const match = useRouteMatch();

  function getInitialTitle() {
    return "cities"
  }

  const [title, setTitle] = useState(getInitialTitle())

  // TODO: Don't think is being called when selecting a specific city...
  useEffect(() => {
    const { pathname } = location
    console.log(pathname)
    if (pathname === "/city/:cityName/:stateName")
    {
      setTitle(props.match.params.cityName)
    }
    else
    {
      setTitle(getInitialTitle())
    }
  }, [location]);


  return (
  	<Container>
      <NavBarLeft />
      <Header>{title}</Header>
      <BaseDiv>
        <Route exact path={`${match.path}`} component={Cities} />
        <Route exact path={`${match.path}/:cityName/:stateName`} component={City} />
      </BaseDiv>
	  </Container>
  )
}

export default BaseContainer