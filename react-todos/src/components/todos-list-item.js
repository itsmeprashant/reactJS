import React from 'react';

export default class TodosListItem extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			isEditing: false
		};
	}

	renderTaskSection() {

		const { task, isCompleted } = this.props;

		const taskStyle = {
		    color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

		if ( this.state.isEditing ) {
            return (
                <td>
                    <form onSubmit={ this.onSaveClick.bind( this ) }>
                        <input type='text' ref='editInput' defaultValue={task} />
                    </form>
                </td>
            );
        } else {
            return (
                <td style={ taskStyle }
                    onClick={ this.onListItemClick.bind( this ) }
                >
                    { task }
                </td>
            );
        }

	}

	renderActionSection() {
		if ( this.state.isEditing ) {
			return (
				<td>
					<button onClick={ this.onSaveClick.bind( this ) }>Save</button>
					<button onClick={ this.onCancelClick.bind( this ) }>Cancel</button>
				</td>
			);
		}

		return (
			<td>
				<button onClick={ this.onEditClick.bind( this ) }>Edit</button>
				<button onClick={ this.onDeleteClick.bind( this ) }>Delete</button>
			</td>
		);
	}

	render() {
		return (
			<tr>
				{ this.renderTaskSection() }
				{ this.renderActionSection() }
			</tr>
		)
	}

	onEditClick( event ) {
		this.setState( { isEditing: true } );
	}

	onCancelClick( event ) {
		this.setState( { isEditing: false } );
	}

    onListItemClick( event ) {
	    this.props.toggleTask( this.props.task );
    }

	onSaveClick( event ) {
	    event.preventDefault();

	    const oldTask = this.props.task;
	    const newTask = this.refs.editInput.value;

	    this.props.saveTask( oldTask, newTask );
	    this.setState( { isEditing: false } );
    }

    onDeleteClick( event ) {
        this.props.deleteTask( this.props.task );
    }
}