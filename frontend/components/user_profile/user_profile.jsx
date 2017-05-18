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
        <div>
          here is for user profile pic{this.props.user.profile_pic_url}
        </div>
        <div>
          <div>
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
      </div>
    );
  }
}

export default UserProfile;
