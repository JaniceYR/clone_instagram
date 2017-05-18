import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return(
      <div className="navigation-frame">
        <Link to="/feed">
          <div className="navigation-logo-frame">
            <figure className="icon-main"></figure>
            <figure className="logo-navigation"></figure>
          </div>
        </Link>
        <div className="navigation-icon-frame">
          <Link to={`/${this.props.currentUser.id}/post_upload`} >
            <figure className="icon-uploadphoto"></figure>
          </Link>
          <Link to={`/${this.props.currentUser.id}`} title="My Page">
            <figure className="icon-user"></figure>
          </Link>
            <figure className="icon-logout" onClick={this.logout} title="Logout"></figure>
        </div>

      </div>
    );
  }
}

export default Navigation;
