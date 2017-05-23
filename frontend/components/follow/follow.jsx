import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.followOrUnfollow = this.followOrUnfollow.bind(this);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  follow(e) {
    e.preventDefault();
    this.props.createFollow(this.props.currentUser.id, this.props.user.id);
  }

  unfollow(e) {
    e.preventDefault();
    this.props.deleteFollow(this.props.currentUser.id, this.props.user.id);
  }

  followOrUnfollow() {
    if(this.props.currentUser.id !== this.props.user.id) {
      if(this.props.user.followed){
        return (
          <button className="profile-header-right-1-edit-button"
                  onClick={this.unfollow}>
            Following
          </button>
        );
      } else {
        return (
          <button className="profile-header-right-1-edit-follow"
                  onClick={this.follow}>
            Follow
          </button>
        );
      }
    }
  }

  render() {
    return (
      <div>
        {this.followOrUnfollow()}
      </div>
    );
  }
}
export default Follow;
