import React from 'react';
import ReactDOM from 'react-dom';


class AppLifeCycle extends React.Component {

    constructor ( props ) {
        super( props );

        this.state = {
            val: 0
        };

        this.update = this.update.bind( this );
    }

    componentWillMount () {
        console.log( 'componentWillMount' );
        this.setState( {
            m: 2
        } );
    }

    render () {
        console.log( 'render' );
        return (
            <button
                onClick={ this.update }
            >
                { this.state.val * this.state.m }
            </button>
        );
    }

    componentDidMount () {
        console.log( 'componentDidMount' );
        // console.log( ReactDOM.findDOMNode( this ) ) ;
        this.inc = setInterval( this.update, 500 );
    }

    componentWillUnmount () {
        console.log( 'componentWillUnmount' );
        clearInterval( this.inc );
    }

    update () {
        this.setState( {
            val: this.state.val + 1
        } )
    }

}

class Wrapper extends React.Component {

    render () {
        return (
            <div>
                <button onClick={ this.onMountClick.bind( this ) }>Mount</button>
                <button onClick={ this.onUnmountClick.bind( this ) }>Unmount</button>
                <div id="a"></div>
            </div>
        );
    }

    onMountClick () {
        ReactDOM.render( <AppLifeCycle />, document.querySelector( '#a' ) );
    }

    onUnmountClick () {
        ReactDOM.unmountComponentAtNode( document.querySelector( '#a' ) );
    }

}

export default Wrapper;