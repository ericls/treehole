import React from 'react'
import { connect } from "react-redux"
import { browserHistory } from "react-router"
import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import {
  toggleSaveModal,
  toggleSaveSuccessModal,
  createNewNoteAsync,
  updateNewNote,
  updateNote
} from './actions'
import { getSuccessIcon } from './utils'


class SaveModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {password: ""};
    this.handleClose = this.handleClose.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }
  onPasswordChange(event) {
    this.setState({password: event.target.value})
  }
  handleClose() {
    this.props.dispatch(toggleSaveModal(false))
  }
  onSave() {
    this.props.dispatch(createNewNoteAsync(this.props.newNote, this.state.password))
  }
  render() {
    let modal = (
      <ModalContainer onClose={this.handleClose}>
          <ModalDialog className="modal save-modal" onClose={this.handleClose}>
            <label htmlFor="password" className="modal--inpit-label save-modal--password-label">password</label>
            <input type="password" className="modal--input save-modal--password-input" onChange={this.onPasswordChange}/>
            <div className="modal--action">
              <button className="modal--btn modal--btn__secondary" onClick={this.handleClose}>
                cancel
              </button>
              <button className="modal--btn modal--btn__primary" onClick={this.onSave}>
                save
              </button>
            </div>
          </ModalDialog>
        </ModalContainer>
    )
    return (
      <div>
        {this.props.showSaveModal ? modal : null}
      </div>
    );
  }
}

class SaveSuccessModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this)
    this.onClickView = this.onClickView.bind(this)
    this.onClickNew = this.onClickNew.bind(this)
  }
  handleClose() {
    this.props.dispatch(toggleSaveSuccessModal(false))
  }
  onClickView() {
    this.props.dispatch(updateNewNote({content: ""}))
    this.props.dispatch(updateNote({content: "", slug: "", raw: ""}))
    this.props.dispatch(toggleSaveSuccessModal(false))
    browserHistory.push(`/${this.props.note.slug}`)
  }
  onClickNew() {
    this.props.dispatch(updateNewNote({content: ""}))
    this.props.dispatch(updateNote({content: "", slug: "", raw: ""}))
    $('textarea').val("")
    this.props.dispatch(toggleSaveSuccessModal(false))
    browserHistory.push(`/`)
  }
  render() {
    let modal = (
      <ModalContainer>
          <ModalDialog className="modal save-success-modal">
            {getSuccessIcon("green", "modal--icon modal--icon__success")}
            <p className="modal--title">saved</p>
            <p className="modal--new-note-address">
              {location.origin}/<span className="modal--new-note-slug">{this.props.note.slug}</span>
            </p>
            <div className="modal--action">
              <button className="modal--btn modal--btn__secondary" onClick={this.onClickView}>
                view
              </button>
              <button className="modal--btn modal--btn__primary" onClick={this.onClickNew}>
                new
              </button>
            </div>
          </ModalDialog>
        </ModalContainer>
    )
    return (
      <div>
        {this.props.showSaveSuccessModal ? modal : null}
      </div>
    );
  }
}

SaveModal = connect((state)=>{
  return {
    showSaveModal: state.showSaveModal,
    newNote: state.newNote
  }
})(SaveModal)

SaveSuccessModal = connect((state)=>{
  return {
    showSaveSuccessModal: state.showSaveSuccessModal,
    note: state.note
  }
})(SaveSuccessModal)

export {SaveModal, SaveSuccessModal}
