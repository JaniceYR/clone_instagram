import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.likePost = this.likePost.bind(this);
    this.unlikePost = this.unlikePost.bind(this);
    this.likeOrUnlikePost = this.likeOrUnlikePost.bind(this);
  }

  likePost(e) {
    e.preventDefault();
    this.props.createLike(this.props.userId, this.props.postId);
  }

  unlikePost(e) {
    e.preventDefault();
    this.props.deleteLike(this.props.userId, this.props.postId);
  }

  likeOrUnlikePost() {
    if(this.props.liked){
      return (
        <figure className="unlike-button" onClick={this.unlikePost}></figure>
      );
    } else {
      return (
        <figure className="like-button" onClick={this.likePost}></figure>
      );
    }
  }

  render() {
    return (
      <div className="like-button-frame">
        {this.likeOrUnlikePost()}
      </div>
    );
  }
}
export default Like;
