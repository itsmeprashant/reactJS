import React from 'react';
import InputComponent from './components/input';
import { Button, Heart } from './components/mixed-components';

class App extends React.Component {

    constructor ( props ) {
        super( props );

        this.state = {
            txt: 'This is the state text'
        };

        this.onEventOccurred = this.onEventOccurred.bind( this );
    }

    onInputChange( event ) {
        this.setState( { txt: event.target.value } )
    }

    onEventOccurred( event ) {
        this.setState( { txt: event.type } );
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
                <textarea
                    cols="20"
                    rows="5"
                    onDoubleClick={ this.onEventOccurred }
                    onBlur={ this.onEventOccurred }
                    onFocus={ this.onEventOccurred }
                    onKeyPress={ this.onEventOccurred }
                    onTouchStart={ this.onEventOccurred }
                    onTouchMove={ this.onEventOccurred }
                    onTouchEnd={ this.onEventOccurred }
                />
                <br /><br />
                <Button>I <Heart /> React</Button>
            </div>
        );
    };
}

// defines the expected PropTypes for the component to be passed to it
// App.propTypes = {
//     txt: React.PropTypes.string,
//     cat: React.PropTypes.number.isRequired
// };
App.propTypes = {
    someProperty( props, propName, component ) {
        if ( !( propName in props ) ) {
            return new Error( `missing ${ propName }` );
        }
        if ( props[ propName ].length < 6 ) {
            return new Error( `${ propName } is too short` );
        }
    }
};

// the default properties for the component
App.defaultProps = {
    txt: 'This is the default text'
};

// const App = () => <h1>Hello World</h1>

export default App;