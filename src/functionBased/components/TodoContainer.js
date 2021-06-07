import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodoList"
import NavBar from "./NavBar"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"

import { v4 as uuidv4 } from "uuid"

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())

  function getInitialTodos() {
  	const temp = localStorage.getItem("todos")
  	const savedTodos = JSON.parse(temp)
  	return savedTodos || []
  }

  const toggleTodoCompletion = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const deleteTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const updateTodo = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  useEffect(() => {
  	const temp = JSON.stringify(todos)
  	localStorage.setItem("todos", temp)
  }, [todos])

  return (
  	<>
	  	<NavBar />
	  	<Switch>
		  	<Route exact path="/">
			    <div className="container">
			      <div className="inner">
			        <Header />
			        <InputTodo addTodoProps={ addTodoItem } />
			        <TodosList
			          todos={ todos }
			          toggleTodoCompletion={ toggleTodoCompletion }
			          deleteTodo={ deleteTodo }
			          updateTodo={ updateTodo }
			        />
			      </div>
			    </div>
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

export default TodoContainer