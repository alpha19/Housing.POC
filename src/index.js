import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router} from "react-router-dom"

import CityContainer from "./components/Cities/CityContainer"

//stylesheet
import "./app.css"

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<CityContainer />
		</Router>
	</React.StrictMode>, 
	document.getElementById("root")
)