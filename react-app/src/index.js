import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log( 'working' );
ReactDOM.render(
    <App
        cat={5}
        someProperty="prop123"
    />,
    document.querySelector( '#app' )
);