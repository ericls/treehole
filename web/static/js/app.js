import "phoenix_html"
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'

import noteApp from './reducers'

import Editor from './Editor'

let store = createStore(noteApp, window.INIT_STATE)

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
        <footer className="footer">
          <a
            href="#"
            className={`footer--btn footer--btn__${note.content ? "green" : "grey"}`}
          >
            save
          </a>
        </footer>
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
