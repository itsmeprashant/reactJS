import React from 'react';

export default class TodosListItem extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			isEditing: false
		};
	}

	renderTaskSection() {
		return (
			<td>{ this.props.task }</td>
		);
	}

	renderActionSection() {
		if ( this.state.isEditing ) {
			return (
				<td>
					<button>Save</button>
					<button onClick={ this.onCancelClick.bind( this ) }>Cancel</button>
				</td>
			);
		}

		return (
			<td>
				<button onClick={ this.onEditClick.bind( this ) }>Edit</button>
				<button>Delete</button>		
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
}