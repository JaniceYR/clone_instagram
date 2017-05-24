import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentList extends React.Component {
  constructor(props){
    super(props);
    this.ownerDescription = this.ownerDescription.bind(this);
  }

  ownerDescription() {
    if (this.props.description) {
      debugger
      return (
        <li key='comment-user-description'>
          {this.props.username}
          {this.props.description}
        </li>
      );
    }
  }

  render(){
    // debugger
    return(
      <div>
        <ul>
          {this.ownerDescription()}
          {
            this.props.comments ? this.props.comments.map((comment) =>

              <li className="comment-list" key={`comment-${comment.id}`}>
                <Link to={`/${comment.user_id}`} className="comment-username">
                  {comment.username}
                </Link>
                {comment.body}
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
