import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import _ from 'lodash';

const todos = [ {
	task: 'lets do something interesting',
	isCompleted: true
}, {
	task: 'lets party',
	isCompleted: false
} ];

export default class App extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			todos
		}
	}

	render() {
		return (
			<div>
				<h1>React ToDos App</h1>
				<CreateTodo
                    createTask={ this.createTask.bind( this ) }
                    todos={ this.state.todos }
                />
				<TodosList
					todos={ this.state.todos }
					toggleTask={ this.toggleTask.bind( this ) }
                    saveTask={ this.saveTask.bind( this ) }
                    deleteTask={ this.deleteTask.bind( this ) }
				/>
			</div>
		)
	}

	createTask( task ) {
		this.state.todos.push( { 
			task,
			isCompleted: false
	 	} );

		this.setState( {
			todos: this.state.todos
		} );
	}

    toggleTask( task ) {
		let foundTodo = _.find( this.state.todos, todo => todo.task === task );
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState( { todos: this.state.todos } );
	}

    saveTask( oldTask, newTask ) {
	    let foundTodo = _.find( this.state.todos, todo => todo.task === oldTask );
	    foundTodo.task = newTask;
	    this.setState( { todos: this.state.todos } );
    }

    deleteTask( task ) {
	    _.remove( this.state.todos, todo => todo.task === task );
        this.setState( { todos: this.state.todos } );
    }
}