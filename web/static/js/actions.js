import $ from "jquery"

export const UPDATE_NOTE = "UPDATE_NOTE"
export const UPDATE_NEW_NOTE = "UPDATE_NEW_NOTE"
export const TOGGLE_SAVE_MODAL = "TOGGLE_SAVE_MODAL"
export const TOGGLE_SAVE_SUCCESS_MODAL = "TOGGLE_SAVE_SUCCESS_MODAL"

export function updateNote(data) {
  return {
    type: UPDATE_NOTE,
    note: data
  }
}

export function updateNewNote(data) {
  return {
    type: UPDATE_NEW_NOTE,
    note: data
  }
}

export function toggleSaveModal(show) {
  return {
    type: TOGGLE_SAVE_MODAL,
    show: show
  }
}

export function toggleSaveSuccessModal(show) {
  return {
    type: TOGGLE_SAVE_SUCCESS_MODAL,
    show: show
  }
}

export function createNewNoteAsync(data) {
  return (dispatch) => {
    let { content } = data
    if (!content) {
      return
    }
    $.ajax({
      url: "/api/notes",
      method: "POST",
      data: JSON.stringify({"note": {"content": content}}),
      contentType: 'application/json; charset=utf-8',
      datatype: "json"
    })
    .done((data) => {
      dispatch(updateNote(data.data))
      dispatch(toggleSaveModal(false))
      dispatch(toggleSaveSuccessModal(true))
    })
    .fail((jqXHR) => {
      console.log(jqXHR)
    })
  }
}
