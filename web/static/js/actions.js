import { browserHistory } from "react-router"
import $ from "jquery"
import sjcl from "sjcl"
import { isJSON } from "./utils"

export const UPDATE_NOTE = "UPDATE_NOTE"
export const UPDATE_NEW_NOTE = "UPDATE_NEW_NOTE"
export const TOGGLE_SAVE_MODAL = "TOGGLE_SAVE_MODAL"
export const TOGGLE_SAVE_SUCCESS_MODAL = "TOGGLE_SAVE_SUCCESS_MODAL"
export const TOGGLE_DELETE_MODAL = "TOGGLE_DELETE_MODAL"

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

export function toggleDeleteModal(show) {
  return {
    type: TOGGLE_DELETE_MODAL,
    show: show
  }
}

export function createNewNoteAsync(data, password) {
  return (dispatch) => {
    let { content } = data
    if (!content) {
      return
    }
    let encryptedContent = sjcl.encrypt(password, content)
    $.ajax({
      url: "/api/notes",
      method: "POST",
      data: JSON.stringify({"note": {"content": encryptedContent}}),
      contentType: 'application/json; charset=utf-8',
      datatype: "json"
    })
    .done((data) => {
      dispatch(updateNote(Object.assign({}, data.data, {content: ""}, {raw: data.data.content})))
      dispatch(toggleSaveModal(false))
      dispatch(toggleSaveSuccessModal(true))
    })
    .fail((jqXHR) => {
      console.log(jqXHR)
    })
  }
}


export function getNoteAsync(slug) {
  return (dispatch) => {
    return $.ajax({
      url: `/api/notes/${slug}`,
      method: "GET",
      contentType: 'application/json; charset=utf-8',
      datatype: "json"
    })
    .done((data) => {
      let content = "";
      let raw = data.data.content;
      if (!isJSON(raw)) {
        content = raw;
        raw = ""
      }
      dispatch(updateNote({slug: data.data.slug, content: content, raw: raw}))
    })
    .fail((jqXHR) => {
      dispatch(updateNote({notFound: true}))
      console.log(jqXHR)
    })
  }
}

export function deleteNoteAsync(slug) {
  return (dispatch) => {
    return $.ajax({
      url: `/api/notes/${slug}`,
      method: "DELETE",
      contentType: 'application/json; charset=utf-8',
      datatype: "json"
    })
    .done((data) => {
      dispatch(updateNote({slug: "", content: "", raw: ""}))
      dispatch(updateNewNote({content: ""}))
    })
    .fail((jqXHR) => {
      console.log(jqXHR)
    })
  }
}
