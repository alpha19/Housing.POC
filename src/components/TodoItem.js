import React, { Component } from "react"

class TodoItem extends Component {
	render () {
		return (
			<li>
				<input 
					type="checkbox" 
					checked={this.props.todo.completed}
					onChange={() => this.props.completeTodo(this.props.todo.id)}
				/>
				<button
					onClick={() => this.props.deleteTodo(this.props.todo.id)}>
					Delete
				</button>
				{this.props.todo.title}
			</li>
		)
	}
}

export default TodoItem