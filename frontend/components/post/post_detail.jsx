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
          <img src={this.props.user.profile_pic_url} />
          {this.props.user.username}
          {this.props.post.location}
          {this.props.user.username}
          {this.props.post.description}
        </div>
      </div>

    );
  }
}

export default PostDetail;
