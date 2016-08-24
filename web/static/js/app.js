import "phoenix_html"
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import noteApp from './reducers'

let store = createStore(noteApp, window.INIT_STATE)

class App extends React.Component {
  render() {
    return <h1>Hello from {this.props.phrase}</h1>;
  }
}

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App phrase="ES6"/>
      </Provider>
    )
  }
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}/>
  </Router>,
  document.querySelector('#app')
);
