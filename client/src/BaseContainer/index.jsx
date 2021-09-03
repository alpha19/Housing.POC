import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import { BasePage, Header} from './Styles';

import NavBarLeft from './NavBarLeft'

import About from 'shared/components/About'

const BaseContainer = () => {
  const match = useRouteMatch();

  function getInitialTitle() {
    return "cities"
  }

  const [title, setTitle] = useState(getInitialTitle())

  useEffect(() => {
    const { pathname } = location;
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
  	<BasePage>
	  	<NavBarLeft />
      <Header>{title}<Header/>
      <BaseDiv>
        <Route exact path={`${match.path}`} component={Cities} />
        <Route exact path={`${match.path}/:cityName/:stateName` component={City} />
  		  <Route path="/about" component={About} />
      </BaseDiv>
	</BasePage>
  )
}

export default CityContainer