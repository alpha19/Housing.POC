import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "../Header"
import NavBar from "../NavBar"

import InputCity from "./InputCity"
import CitiesList from "./CityList"
import CityDetail from "./CityDetail"

import About from "../../pages/About"
import NotMatch from "../../pages/NotMatch"

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
        <Route exact path="/city/:cityName/:stateName"
          render = { (props) => 
          (
            <CityDetail 
              city = 
              { 
                cities.filter
                (city => 
                  (
                    city.cityName === props.match.params.cityName  && 
                    city.stateName === props.match.params.stateName 
                  )
                )[0]
              } 
            />
          )}
        />
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