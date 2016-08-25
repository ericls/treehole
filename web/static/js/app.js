import "phoenix_html"
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'
import thunk from 'redux-thunk';

import noteApp from './reducers'

import Editor from './Editor'
import Footer from './Footer'

let store = createStore(noteApp, window.INIT_STATE, applyMiddleware(thunk))

class App extends React.Component {
  render() {
    let note = this.props.note
    let newNote = this.props.newNote
    return (
      <div className="app-container">
        <header className="header">
          <h1 className="header--logo">
            Tree Hole
          </h1>
        </header>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App = connect((state)=>{
  return {
    note: state.note,
    newNote: state.newNote
  }
})(App)

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App children={this.props.children}/>
      </Provider>
    )
  }
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route name="App" path="/" component={Root}>
      <IndexRoute name="new" component={Editor} />
      <Route path="/:slug" component={Editor}/>
    </Route>
  </Router>,
  document.querySelector('#app')
);
