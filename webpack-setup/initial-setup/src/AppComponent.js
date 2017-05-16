import React from 'react';
import styles from './app.scss';

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>Hello, World!</h2>
                <button onClick={this.buttonClick.bind( this )} type="button">Click me!</button>
            </div>
        );
    }

    buttonClick( event ) {
        console.log( 'clicked' );
        // debugger;
    }

}

export default App;