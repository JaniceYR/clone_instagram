import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Navigation from '../navigation/navigation_container';

class UserProfile extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return(
      <div>
        <Navigation />
        <h1>User Profile Page</h1>
      </div>
    );
  }
}

export default UserProfile;
