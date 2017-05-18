import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Navigation from '../navigation/navigation_container';

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


      </div>
    );
  }
}

export default UserProfile;
