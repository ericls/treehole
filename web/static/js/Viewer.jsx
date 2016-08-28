import React from 'react'
import { connect } from "react-redux"
import { getNoteAsync, updateNote } from "./actions"
import { getLockIcon, isJSON } from './utils'
import { DeleteConfirmModal } from "./Modal"

class Viewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {password: ""}
    this.onClickUnlock = this.onClickUnlock.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }
  onClickUnlock(event) {
    let note = this.props.note
    let password = this.state.password
    let content = ""
    try {
      content = sjcl.decrypt(password, note.raw)
    } catch (e) {
      console.log(e)
    } finally {
      // this.props.dispatch(updateNote(Object.assign(note, {content: content})))
      this.props.dispatch(updateNote(Object.assign({}, note, {content: content})))
    }
  }
  onPasswordChange(event) {
    this.setState({password: event.target.value})
  }
  componentDidMount() {
    let slug = this.props.params.slug
    this.props.dispatch(getNoteAsync(slug))
  }
  render() {
    let note = this.props.note
    if (note.notFound) {
      return (
        <div className={`viewer viewer__centred`}>
          <div className="viewer--content-lock">
            <div className="viewer--content-lock-icon">
              {getLockIcon("grey")}
            </div>
            <div className="viewer--not-found">
              Not Found
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className={`viewer ${note.content ? "" : "viewer__centred"}`}>
        {
          note.content
          ?
          [
            <textarea key="viewerContent" className="viewer--content" name="note" readOnly value={note.content}>
            </textarea>,
            <DeleteConfirmModal key="deleteConfirmModal" />
          ]
          :
          <div className="viewer--content-lock">
            <div className="viewer--content-lock-icon">
              {getLockIcon("grey")}
            </div>
            <div>
              <input type="password" className="viewer--password-input" onChange={this.onPasswordChange}/>
                <button
                  className={`viewer--btn viewer--btn__${this.state.password ? "green" : "grey"}`}
                  onClick={this.onClickUnlock}
                >
                  unlock
                </button>
            </div>
          </div>
        }
      </div>
    );
  }
}

Viewer = connect((state)=>{
  return {
    note: state.note
  }
})(Viewer)

export default Viewer
