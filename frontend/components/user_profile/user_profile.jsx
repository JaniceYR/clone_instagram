import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import Navigation from '../navigation/navigation_container';
import UserEditContainer from './user_edit_container';
import PostItemContainer from '../post/post_item_container';
import FollowContainer from '../follow/follow_container';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.editProfile = this.editProfile.bind(this);

  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname){
      this.props.fetchUser(nextProps.match.params.userId);
    }
    if (nextProps.user.followed !== this.props.user.followed){
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  editProfile() {
    if(this.props.currentUser.id === this.props.user.id) {
      return (
        <div>
          <Link to={`${this.props.user.id}/edit`}>
            <button className="profile-header-right-1-edit-button">
              Edit Profile
            </button>
          </Link>
          <Link to={`/${this.props.currentUser.id}/post_upload`} >
            <button className="profile-header-right-1-edit-follow">
              New Post
            </button>
          </Link>
        </div>
      );
    }
  }

  render() {
    return(
      <div>
        <Navigation />
        <article className="profile-page">
          <header className="profile-header">
            <div className="profile-header-left">
              <img src={this.props.user.profile_pic_url} />
            </div>
            <div className="profile-header-right">
              <div className="profile-header-right-1">
                <h1>{this.props.user.username}</h1>

                {this.editProfile()}
                <FollowContainer user={this.props.user}/>
              </div>
              <ul className="profile-header-right-2">
                <li> <h3>{this.props.user.posts_count}</h3>posts</li>
                <li> <h3>{this.props.user.followers_count}</h3>followers</li>
                <li> <h3>{this.props.user.followings_count}</h3>following</li>
              </ul>
              <div className="profile-header-right-3">
                <h3>{this.props.user.name}</h3>
                {this.props.user.bio}
              </div>
            </div>
          </header>
          <div className="post-item-frame">
            <ul className="post-item-ul">
              {
                this.props.user.id ? this.props.user.posts.map((post) => (
                    <li key={`post-item-${post.id}`}>
                      <PostItemContainer post={post}/>
                    </li>
                  )
                )
                : ""
              }
            </ul>
          </div>
        </article>
        <ProtectedRoute path={'/:userId/post/:postId'} component={PostItemContainer} />
      </div>
    );
  }
}

export default UserProfile;
