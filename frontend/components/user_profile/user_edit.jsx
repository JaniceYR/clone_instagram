import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Navigation from '../navigation/navigation_container';

class UserEdit extends React.Component {
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
        <h1>user profile edit page</h1>
        <div>
          <div>
            <h1>Edit Profile</h1>
          </div>
          <div>
            <div>
                <div>
                  here is for user profile pic{this.props.user.profile_pic_url}
                </div>
                <div>
                  <h1>{this.props.user.username}</h1>
                </div>
            </div>
            <div>
              <div>
                <h1>Name</h1>
                <input type="text" value={this.props.user.name}></input>
              </div>
              <div>
                <h1>Username</h1>
                <input type="text" value={this.props.user.username}></input>
              </div>
              <div>
                <h1>Bio</h1>
                <input type="text" value={this.props.user.bio}></input>
              </div>
              <div>
                <h1> </h1>
                <input type="submit" value="Submit"></input>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default UserEdit;
