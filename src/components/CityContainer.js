import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./Header"
import InputCity from "./InputCity"
import CitiesList from "./CityList"
import NavBar from "./NavBar"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"

import { v4 as uuidv4 } from "uuid"

const CityContainer = () => {
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

  const addCityItem = title => {
    const newCity = {
      id: uuidv4(),
      title: title,
    }
    setCities([...cities, newCity])
  }

  const updateCity = (updatedTitle, id) => {
    setCities(
      cities.map(city => {
        if (city.id === id) {
          city.title = updatedTitle
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
  	<>
	  	<NavBar />
	  	<Switch>
		  	<Route exact path="/">
			    <div className="container">
			      <div className="inner">
			        <Header />
			        <InputCity addCityProps={ addCityItem } />
			        <CitiesList
			          cities={ cities }
			          deleteCity={ deleteCity }
			          updateCity={ updateCity }
			        />
			      </div>
			    </div>
		    </Route>
        <Route exact path="/city/:title/">
          <p>UNDER CONSTRUCTION</p>
        </Route>
		    <Route path="/about">
		    	<About />
		    </Route>
		    <Route path="*">
		    	<NotMatch />
		    </Route>
	    </Switch>
	</>
  )
}

export default CityContainer