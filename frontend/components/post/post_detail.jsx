import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import LikeContainer from '../like/like_container';

class PostDetail extends React.Component {
  constructor(props){
    super(props);
    this.moveCursorToInput = this.moveCursorToInput.bind(this);
  }

  moveCursorToInput(e) {
    e.preventDefault();
    document.getElementById("comment_input").focus();
  }

  render() {

    return(
      <div className="post-detail">
        <div className="post-detail-left">
          <img src={this.props.post.photo_url} className="post-detail-left-img"/>
        </div>
        <div className="post-detail-right">
          <Link to={`/${this.props.user.id}`} >
            <div className="post-detail-user-info-frame">
              <img src={this.props.user.profile_pic_url} className="post-detail-user-info-pic"/>
              <div className="post-detail-user-info">
                <h3 className="post-detail-user-info-username">{this.props.user.username}</h3>
                <h3>{this.props.post.location}</h3>
              </div>
            </div>
          </Link>
          <div className="post-detail-comment-frame">
            {this.props.user.username}
            {this.props.post.description}
          </div>
          <div className="post-detail-like-frame">
            <div className="like-button-frame">
              <LikeContainer />
              <label htmlFor="comment_input">
                <figure className="add-comment-button" onClick={this.moveCursorToInput}></figure>
              </label>
            </div>
            {`${this.props.post.likes_count} `}
            likes
          </div>
          <div className="post-detail-add-comment-frame">
            <input type="text" placeholder="Add a comment..." id="comment_input" className="post-detail-add-comment"></input>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(PostDetail);
