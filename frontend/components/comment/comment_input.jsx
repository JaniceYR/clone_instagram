import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentInput extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="post-detail-add-comment-frame">
        <input type="text" placeholder="Add a comment..." id="comment_input" className="post-detail-add-comment"></input>
      </div>
    );
  }
}
export default CommentInput;
