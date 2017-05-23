import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import LikeContainer from '../like/like_container';
import CommentButton from '../comment/comment_button';
import CommentInput from '../comment/comment_input';

class PostDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="post-detail">
        <div className="post-detail-left">
          <img src={this.props.post.photo_url} className="post-detail-left-img"/>
        </div>
        <div className="post-detail-right">
          <div className="post-detail-user-info-frame">
            <img src={this.props.user.profile_pic_url} onClick={this.props.closeModal} className="post-detail-user-info-pic"/>
            <div className="post-detail-user-info">
              <h3 className="post-detail-user-info-username" onClick={this.props.closeModal}>{this.props.user.username}</h3>
              <h3>{this.props.post.location}</h3>
            </div>
          </div>
          <div className="post-detail-comment-frame">
            {this.props.user.username}
            {this.props.post.description}
          </div>
          <div className="post-detail-like-frame">
            <div className="like-button-frame">
              <LikeContainer />
              <CommentButton />
            </div>
            {`${this.props.post.likes_count} `}
            likes
          </div>
          <CommentInput />
        </div>
      </div>

    );
  }
}

export default withRouter(PostDetail);
