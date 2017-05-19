import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import Navigation from '../navigation/navigation_container';
import UserEditContainer from './user_edit_container';


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
                  <button>Edit Profile</button>
                </Link>
                <button>Follow</button>
                <button>Following</button>
              </div>
              <div>
                <h2>{this.props.user.name}</h2>
                <h2>{this.props.user.bio}</h2>
              </div>
            </div>
          </header>
        </article>
      </div>
    );
  }
}

export default UserProfile;
