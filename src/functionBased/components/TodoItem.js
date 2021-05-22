import React, { Component } from "react"

// styles
import styles from "./styles/TodoItem.module.css"

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = { editing: false ,};
	}

	handleEditing = () => {
	  this.setState({
	  	editing: true,
	  });
	}

	handleUpdateDone = (event) => {
		if(event.key === "Enter") {
			this.setState ({ editing: false });
		}
	}

	componentWillUnmount() {
  		console.log("Cleaning up...")
	}

	render () {
		const completedStyle = {
			fontStyle: "italic",
			color: "#595959",
			opacity: 0.4,
			textDecoration: "line-through"
		}

		const { completed, id, title } = this.props.todo

		let viewMode = {}
		let editMode = {}

		if (this.state.editing) {
		  viewMode.display = "none"
		} else {
		  editMode.display = "none"
		}

		return (
			<li className={ styles.item }>
				<div onDoubleClick={this.handleEditing} style={ viewMode }>
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
				</div>
				<input
				 	type="text" 
				 	style={ editMode } 
				 	className={styles.textInput} 
				 	value={ title }
				 	onChange={ e => {
				 		this.props.updateTodo(e.target.value, id)
				 	}}
				 	onKeyDown={this.handleUpdateDone}
				 />
			</li>
		)
	}
}

export default TodoItem