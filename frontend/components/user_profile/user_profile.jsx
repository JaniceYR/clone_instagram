import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import Navigation from '../navigation/navigation_container';
import UserEditContainer from './user_edit_container';
import PostItem from '../post/post_item';

class UserProfile extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }
  render() {
    return(
      <div>
        <Navigation />
        <h1>User Profile Page(id: {this.props.user.username})</h1>
        <article className="profile-page">
          <header className="profile-header">
            <div className="profile-header-left">
              <img src={this.props.user.profile_pic_url} />
            </div>
            <div className="profile-header-right">
              <div className="profile-header-right-1">
                <h1>{this.props.user.username}</h1>
                <Link to={`${this.props.user.id}/edit`}>
                  <button className="profile-header-right-1-edit-button">Edit Profile</button>
                </Link>
                <button className="profile-header-right-1-edit-follow">Follow</button>
                <button className="profile-header-right-1-edit-button">Following</button>
              </div>
              <ul className="profile-header-right-2">
                <li> <h3>000</h3>posts</li>
                <li> <h3>000</h3>follows</li>
                <li> <h3>000</h3>folloing</li>
              </ul>
              <div className="profile-header-right-3">
                <h3>{this.props.user.name}</h3>
                {this.props.user.bio}
              </div>
            </div>
          </header>
          <h1>User's post item</h1>
          <div className="post-item-frame">
            <ul className="post_item_ul">
              {
                this.props.user.id ? this.props.user.posts.map((post) => {
                  return (
                    <li key={`post-item-${post.id}`}>
                      <PostItem post={post}/>
                    </li>
                  );
                })
                : ""
              }
            </ul>
          </div>
        </article>
      </div>
    );
  }
}

export default UserProfile;
