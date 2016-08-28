import React from 'react'
import { connect } from "react-redux"
import { browserHistory } from "react-router"
import {
  updateNewNote,
  toggleSaveModal,
  toggleSaveSuccessModal,
  updateNote,
  deleteNoteAsync
} from "./actions"
import { SaveSuccessModal } from "./Modal"

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.onClickSave = this.onClickSave.bind(this)
    this.onClickNew = this.onClickNew.bind(this)
    this.onClickDelete = this.onClickDelete.bind(this)
  }
  onClickSave(event) {
    if (!this.props.newNote.content) {
      return
    }
    this.props.dispatch(toggleSaveModal(true))
  }
  onClickNew() {
    this.props.dispatch(updateNewNote({content: ""}))
    this.props.dispatch(updateNote({content: "", slug: "", raw: ""}))
    browserHistory.push("/")
  }
  onClickDelete() {
    this.props.dispatch(deleteNoteAsync(this.props.note.slug))
    .then(
      () => {
        browserHistory.push("/")
      }
    )
  }
  render() {
    let note = this.props.note
    let newNote = this.props.newNote
    let buttons
    let newBtn = (
      <button
        key="newBtn"
        className={`footer--btn footer--btn__green`}
        onClick={this.onClickNew}
      >
        new
      </button>
    )
    let deleteBtn = (
      <button
        key="deleteBtn"
        className={`footer--btn footer--btn__red`}
        onClick={this.onClickDelete}
      >
        delete
      </button>
    )
    let saveBtn = (
      <button
        key="saveBtn"
        className={`footer--btn footer--btn__${newNote.content ? "green" : "grey"}`}
        onClick={this.onClickSave}
      >
        save
      </button>
    )
    buttons = [saveBtn]
    if (note.content) {
      buttons = [newBtn, deleteBtn]
    }
    if (note.raw && !note.content) {
      buttons = []
    }
    if (note.notFound) {
      buttons = [newBtn]
    }
    return (
      <footer className="footer">
        {buttons}
        <SaveSuccessModal />
      </footer>
    )
  }
}

Footer = connect((state)=>{
  return {
    newNote: state.newNote,
    note: state.note,
    showSaveModal: state.showSaveModal,
    showSaveSuccessModal: state.showSaveSuccessModal
  }
})(Footer)

export default Footer
