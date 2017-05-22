import React from 'react';
import { Link, withRouter } from 'react-router';

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.followAndUnfollow = this.followAndUnfollow.bind(this);
  }

  followAndUnfollow() {
    if(this.props.currentUser.id !== this.props.user.id) {
      if(this.props.user.followed){
        return (
          <button className="profile-header-right-1-edit-button">
            Following
          </button>
        );
      } else {
        return (
          <button className="profile-header-right-1-edit-follow">
            Follow
          </button>
        );
      }
    }
  }

  render() {
    return (
      <div>
        {this.followAndUnfollow()}
      </div>
    );
  }
}
export default Follow;
