export const UPDATE_NOTE = "UPDATE_NOTE"
export const UPDATE_NEW_NOTE = "UPDATE_NEW_NOTE"

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
