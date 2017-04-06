import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './app-lifecycle';

console.log( 'working' );
ReactDOM.render(
    <App
        cat={5}
        someProperty="prop123"
    />,
    document.querySelector( '#app' )
);