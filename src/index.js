import React from "react"
import ReactDOM from "react-dom"

// Local components
import TodoContainer from "./components/TodoContainer"

// stylesheets
import "./app.css"

ReactDOM.render(
	<React.StrictMode>
		<TodoContainer />
	</React.StrictMode>, 
	document.getElementById("root")
)