import React from 'react'
import { connect } from "react-redux"
import { updateNote } from "./actions"

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.onContentChange = this.onContentChange.bind(this);
  }
  onContentChange(event) {
    this.props.dispatch(updateNote({content: event.target.value}))
  }
  render() {
    return (
      <div className="editor">
        <textarea className="editor--textarea" name="note" onChange={this.onContentChange}>
        </textarea>
      </div>
    );
  }
}

Editor = connect((state)=>{
  return {
    note: state.note
  }
})(Editor)

export default Editor
