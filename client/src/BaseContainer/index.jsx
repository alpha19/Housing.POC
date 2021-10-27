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

  return (
  	<Container>
      <NavBarLeft />
      <Header>{title}</Header>
      <BaseDiv>
        <Route exact path={`${match.path}`} component={Cities} />
        <Route exact path={`${match.path}/:cityName/:stateName`}
          render={ props => <City setTitle={setTitle} /> }
        />
      </BaseDiv>
	  </Container>
  )
}

export default BaseContainer