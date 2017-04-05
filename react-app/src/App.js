import React from 'react';

class App extends React.Component {
    render() {
        let txt = this.props.txt;
        return <h1>Hello world { txt }</h1>
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