// const css = require( './app.scss' );
import css from './app.scss';

console.log( 'hello from app and webpack dev guy' );

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render( 
    <h1>Hello World!</h1>,
    document.getElementById( 'root' )
 );