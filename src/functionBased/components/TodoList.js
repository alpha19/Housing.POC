import React, { Component } from "react"

import TodoItem from "./TodoItem"

class TodoList extends Component {
	render () {
		return (
		<ul>
			{this.props.todos.map(todo => (
				<TodoItem 
					key={todo.id} 
					todo={todo} 
					completeTodo={ this.props.completeTodo }
					deleteTodo={ this.props.deleteTodo }
					updateTodo={ this.props.updateTodo }>
				</TodoItem>)
				)
			}
		</ul>
		)
	}
}

export default TodoList