import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      post_id: null,
      body: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    // e.preventDefault();
    // debugger
    const comment = this.state;
    comment.user_id = this.props.userId;
    comment.post_id = this.props.postId;
    this.props.createComment({comment});
    this.setState({body: ""});
  }

  render() {
    return (
      <div className="post-detail-add-comment-frame">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update('body')}
            placeholder="Add a comment..."
            id="comment_input"
            value={this.state.body}
            className="post-detail-add-comment"></input>
        </form>
      </div>
    );
  }
}
export default CommentInput;
