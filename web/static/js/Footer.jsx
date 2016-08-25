import React from 'react'
import { connect } from "react-redux"
import { updateNewNote, toggleSaveModal, toggleSaveSuccessModal } from "./actions"
import { SaveSuccessModal } from "./Modal"

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onClickSave(event) {
    if (!this.props.newNote.content) {
      return
    }
    this.props.dispatch(toggleSaveModal(true))
  }
  render() {
    let note = this.props.note
    let newNote = this.props.newNote
    return (
      <footer className="footer">
        <button
          className={`footer--btn footer--btn__${newNote.content ? "green" : "grey"}`}
          onClick={this.onClickSave}
        >
          save
        </button>
        <SaveSuccessModal />
      </footer>
    );
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
