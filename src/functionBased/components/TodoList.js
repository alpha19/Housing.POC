import React from "react"

import TodoItem from "./TodoItem"

const TodoList = props => {
	return (
	<ul>
		{props.todos.map(todo => (
			<TodoItem 
				key={todo.id} 
				todo={todo} 
				toggleTodoCompletion={ props.toggleTodoCompletion }
				deleteTodo={ props.deleteTodo }
				updateTodo={ props.updateTodo }>
			</TodoItem>)
			)
		}
	</ul>
	)
}

export default TodoList