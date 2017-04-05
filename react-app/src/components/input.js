import React from 'react';

class InputComponent extends React.Component {
    render() {
        return (
            <input
                type="text"
                onChange={ this.props.onInputChange }
            />
        );
    }
}

export default InputComponent;