import React, { useState, useEffect } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

import { Container, Header, BaseDiv } from './styles';

import NavBarLeft from './NavBarLeft'
import Cities from './Cities'
import City from './City'

import About from 'About'

const BaseContainer = () => {
  const match = useRouteMatch();
  const [title, setTitle] = useState("cities");

  return (
  	<Container>
      <NavBarLeft />
      <Header>{title}</Header>
      <BaseDiv>
        <Route exact path={ `${match.path}` } component={ Cities } />
        <Route exact path={ `${match.path}/:id` } render={ props => <City setTitle={ setTitle } /> } />
      </BaseDiv>
	  </Container>
  )
}

export default BaseContainer