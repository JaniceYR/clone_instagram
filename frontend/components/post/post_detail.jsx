import React from 'react';

class PostDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className="post-detail">
        <div className="post-detail-left">
          <img src={this.props.post.photo_url} className="post-detail-left-img"/>
        </div>
        <div className="post-detail-right">
          <div className="post-detail-user-info-frame">
            <img src={this.props.user.profile_pic_url} className="post-detail-user-info-pic"/>
            <div className="post-detail-user-info">
              <h3 className="post-detail-user-info-username">{this.props.user.username}</h3>
              <h3>{this.props.post.location}</h3>
            </div>
          </div>
          <div className="post-detail-comment-frame">
            {this.props.user.username}
            {this.props.post.description}
          </div>
          <div className="post-detail-like-frame">
            <div className="like-button-frame">
              <figure className="like-button"></figure>
              <figure className="add-comment-button"></figure>
            </div>
            000
            likes
          </div>
          <div className="post-detail-add-comment-frame">
            <input type="text" placeholder="Add a comment..." className="post-detail-add-comment"></input>
          </div>
        </div>
      </div>

    );
  }
}

export default PostDetail;
