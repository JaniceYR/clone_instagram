import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return(
      <div className="navigation-frame">
        <div className="navigation-logo-frame">
          <figure className="icon-main"></figure>
          <figure className="logo-navigation"></figure>
        </div>
        <div className="navigation-icon-frame">
          <figure className="icon-uploadphoto"></figure>
          <Link to="/:userid">
            <figure className="icon-user"></figure>
          </Link>
          <figure className="icon-logout"></figure>
        </div>
      </div>
    );
  }
}

export default Navigation;
