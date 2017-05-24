import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentList extends React.Component {
  constructor(props){
    super(props);
    this.ownerDescription = this.ownerDescription.bind(this);
    this.deleteCommentButton = this.deleteCommentButton.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  ownerDescription() {

    if (this.props.description) {
      return (
        <li key='comment-user-description' className="comment-list" >
          <h3>
            <Link to={`/${this.props.postOwnerId}`} className="comment-username">
            {this.props.username}
            </Link>
            {this.props.description}
          </h3>
        </li>
      );
    }
  }

  deleteCommentButton(comment) {
    if (this.props.currentUserId === this.props.postOwnerId
      || this.props.currentUserId === comment.user_id) {
      return (
        <figure onClick={() => this.deleteComment(comment.id)}
                className="comment-delete-button">
        </figure>
      );
    }
  }

  deleteComment(commentId) {
    event.preventDefault();
    this.props.deleteComment(commentId);
  }

  render(){
    return(
      <div>
        <ul>
          {this.ownerDescription()}
          {
            this.props.comments ? this.props.comments.map((comment) =>

              <li className="comment-list" key={`comment-${comment.id}`}>
                <h3>
                  <Link to={`/${comment.user_id}`} className="comment-username">
                    {comment.username}
                  </Link>
                  {comment.body}
                </h3>
                {this.deleteCommentButton(comment)}
              </li>
            )
            : ""
          }
        </ul>
      </div>
    );
  }
}

export default CommentList;
