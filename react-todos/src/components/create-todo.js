import React from 'react';

export default class CreateTodo extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            error: null
        };

    }

    renderError() {

        if ( this.state.error ) {
            return (
                <div style={ { color: 'red' } }>
                    { this.state.error }
                </div>
            );
        } else {
            return null;
        }

    }

    render() {
		return (
			<form onSubmit={ this.handleCreate.bind( this ) }>
				<input type="text" placeholder="What do I need to do?" ref="createInput" />
				<button>Create</button>
                { this.renderError() }
			</form>
		)
	}

	handleCreate( event ) {
		event.preventDefault();

		const createInput = this.refs.createInput;
		const inputValue = createInput.value;

		const validateInput = this.validateInput( inputValue );

		if ( validateInput ) {
            this.setState( { error: validateInput } );
            createInput.focus();
            return;
		}

        this.setState( { error: null } );

		this.props.createTask( inputValue );

		createInput.value = '';
		createInput.focus();
	}

	validateInput( task ) {

	    if ( !task ) {
	        return 'Please enter a task';
        } else if ( _.find( this.props.todos, todo => todo.task === task ) ) {
	        return 'Task already exists';
        } else {
	        return null;
        }

	}
}

