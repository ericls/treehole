import { combineReducers } from 'redux'
import { UPDATE_NOTE, UPDATE_NEW_NOTE, TOGGLE_SAVE_MODAL, TOGGLE_SAVE_SUCCESS_MODAL} from './actions'

function note(state={content: "", slug: "", raw: ""}, action) {
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

function showSaveModal(state=false, action) {
  switch (action.type) {
    case TOGGLE_SAVE_MODAL:
      return action.show
      break;
    default:
      return state
  }
}

function showSaveSuccessModal(state=false, action) {
  switch (action.type) {
    case TOGGLE_SAVE_SUCCESS_MODAL:
      return action.show
      break;
    default:
      return state
  }
}

const noteApp = combineReducers({
  note,
  newNote,
  showSaveModal,
  showSaveSuccessModal
})

export default noteApp
