import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import LikeContainer from '../like/like_container';
import CommentListContainer from '../comment/comment_list_container';
import CommentButton from '../comment/comment_button';
import CommentInputContainer from '../comment/comment_input_container';

class PostDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.post.id);
  }

  render() {
    return(
      <div className="post-detail">
        <div className="post-detail-left">
          <img src={this.props.post.photo_url} className="post-detail-left-img"/>
        </div>
        <div className="post-detail-right">
          <header className="post-detail-user-info-frame">
            <img src={this.props.user.profile_pic_url} onClick={this.props.closeModal} className="post-detail-user-info-pic"/>
            <div className="post-detail-user-info">
              <h3 className="post-detail-user-info-username" onClick={this.props.closeModal}>{this.props.user.username}</h3>
              <h3>{this.props.post.location}</h3>
            </div>
          </header>
          <div className="post-detail-comment-frame">
            <CommentListContainer comments={this.props.postDetail.comments}
                        username={this.props.user.username}
                        description={this.props.postDetail.description}/>
          </div>
          <div className="post-detail-like-frame">
            <div className="like-and-comment-button-frame">
              <LikeContainer postId={this.props.postDetail.id}
                            liked={this.props.postDetail.liked}/>
              <CommentButton />
            </div>
            <h3 className="like-count">
              {`${this.props.postDetail.likes_count} `} likes
            </h3>
          </div>
          <div className="post-datail-comment-input-frame">
            <CommentInputContainer postId={this.props.postDetail.id}/>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(PostDetail);
