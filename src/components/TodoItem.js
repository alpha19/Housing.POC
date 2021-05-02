import React, { Component } from "react"

// styles
import styles from "./styles/TodoItem.module.css"

class TodoItem extends Component {
	render () {
		const completedStyle = {
			fontStyle: "italic",
			color: "#595959",
			opacity: 0.4,
			textDecoration: "line-through"
		}

		const { completed, id, title } = this.props.todo

		return (
			<li className={ styles.item }>
				<input 
					type="checkbox" 
					className={ styles.checkbox }
					checked={ completed }
					onChange={() => this.props.completeTodo(id)}
				/>
				<button
					onClick={() => this.props.deleteTodo(id)}>
					Delete
				</button>
				<span style={ completed ? completedStyle : null }>
					{ title }
				</span>
			</li>
		)
	}
}

export default TodoItem