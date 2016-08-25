import React from 'react'
import { connect } from "react-redux"
import { updateNewNote } from "./actions"
import { SaveModal } from "./Modal"

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.onContentChange = this.onContentChange.bind(this);
  }
  onContentChange(event) {
    this.props.dispatch(updateNewNote({content: event.target.value}))
  }
  render() {
    return (
      <div className="editor">
        <textarea className="editor--textarea" name="note" onChange={this.onContentChange}>
        </textarea>
        <SaveModal />
      </div>
    );
  }
}

Editor = connect((state)=>{
  return {
    newNote: state.newNote
  }
})(Editor)

export default Editor
