import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button>{ this.props.children }</button>
        );
    }
}

class Heart extends React.Component {
    render() {
        return (
            <span>&hearts;</span>
        );
    }
}

export { Button, Heart };