import "phoenix_html"
import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return <h1>Hello from {this.props.phrase}!</h1>;
    }
}

ReactDOM.render(
    <HelloWorld phrase="ES6"/>,
    document.querySelector('#app')
);
