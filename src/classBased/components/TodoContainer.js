import React, { Component } from "react"
import { v4 as uuidv4 } from "uuid";

import TodoList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends Component {
	state = {
		todos : [],
	}

	completeTodo = id => {
		this.setState( prevState => ({
			todos: prevState.todos.map(todo => {
				if(todo.id === id)
				{
					return {
					...todo,
					completed: !todo.completed,
					}
				}
				return todo;
			}),
		}));
	};

	deleteTodo = id => {
		this.setState({
			todos: [
				...this.state.todos.filter(todo => {
					return todo.id !== id;
				})
			]
		});
	}

	addTodoItem = title => {
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false
		};
		
		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	}

	updateTodo = (updatedTitle, id) => {
  		this.setState({
  			todos: this.state.todos.map(todo => {
  				if(todo.id === id) {
  					todo.title = updatedTitle;
  				}
  				return todo;
  			}),
  		});
	}

	async componentDidMount() {
		const temp = localStorage.getItem("todos")
		let loadedTodos = JSON.parse(temp)
		if(!loadedTodos)
		{
			console.log("querying web api for todos json")
			loadedTodos = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
				.then(response => response.json())
		}


		this.setState({ todos: loadedTodos })
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.todos !== this.state.todos)
		{
			const temp = JSON.stringify(this.state.todos)
			localStorage.setItem("todos", temp)
		}
	}

	render() {
		return (
			<div className="container">
				<div className="inner">
				<Header />
				<InputTodo addTodo={this.addTodoItem}/>
				<TodoList 
					todos={ this.state.todos } 
					completeTodo={ this.completeTodo } 
					deleteTodo={ this.deleteTodo }
					updateTodo={ this.updateTodo }
					/>
				</div>
			</div>
		);
	}
}

export default TodoContainer