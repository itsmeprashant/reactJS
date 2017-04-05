import React from 'react';
import InputComponent from './components/input';
import { Button, Heart } from './components/mixed-components';

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
                <h1>{ this.state.txt }</h1>
                <InputComponent
                    onInputChange={ this.onInputChange.bind( this ) }
                />
                <InputComponent
                    onInputChange={ this.onInputChange.bind( this ) }
                />
                <br /><br />
                <Button>I <Heart /> React</Button>
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