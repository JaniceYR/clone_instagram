import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentButton extends React.Component {
  constructor(props) {
    super(props);
    this.moveCursorToInput = this.moveCursorToInput.bind(this);
  }

  moveCursorToInput(e) {
    e.preventDefault();
    document.getElementById("comment_input").focus();
  }
  
  render() {
    return (
      <label htmlFor="comment_input">
        <figure className="add-comment-button" onClick={this.moveCursorToInput}></figure>
      </label>
    );
  }
}
export default CommentButton;
