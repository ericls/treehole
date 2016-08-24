import { combineReducers } from 'redux'
import { UPDATE_NOTE, UPDATE_NEW_NOTE } from './actions'

function note(state={content: "", slug: ""}, action) {
  switch (action.type) {
    case UPDATE_NOTE:
      return action.note
      break;
    default:
      return state
  }
}

function newNote(state={content: ""}, action) {
  switch (action.type) {
    case UPDATE_NEW_NOTE:
      return action.note
      break;
    default:
      return state
  }
}

const noteApp = combineReducers({
  note,
  newNote
})

export default noteApp
