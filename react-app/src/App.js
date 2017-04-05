import React from 'react';

class App extends React.Component {

    constructor ( props ) {
        super( props );

        this.state = {
            txt: 'This is the state text'
        };
    }

    onInputChange( event ) {
        this.setState( { txt: event.target.value } )
    }

    render() {
        return (
            <div>
                <input type="text"
                       onChange={ this.onInputChange.bind( this ) }
                />
                <h1>{ this.state.txt }</h1>
            </div>
        );
    };
}

// defines the expected PropTypes for the component to be passed to it
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

// the default properties for the component
App.defaultProps = {
    txt: 'This is the default text'
};

// const App = () => <h1>Hello World</h1>

export default App;