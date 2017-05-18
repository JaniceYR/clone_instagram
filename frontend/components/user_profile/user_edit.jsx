import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Navigation from '../navigation/navigation_container';

class UserEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      username: "",
      name: "",
      bio: "",
      profile_pic_url: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.updateUser({user});
  }

  render() {
    if(this.state.id === null) {
      this.state = this.props.user;
    }
    return(
      <div>
        <Navigation />
        <h1>user profile edit page</h1>
        <div className="edit-page">
          <div className="edit-frame-merge">
            <div className="edit-sub-frame-left">
              <h1>Edit Profile</h1>
            </div>
            <div className="edit-sub-frame-right">
              <div className="user-pic-frame">
                  <div>
                    here is for user profile pic{this.props.user.profile_pic_url}
                  </div>
                  <div>
                    <h1>{this.props.user.username}</h1>
                  </div>
              </div>
              <div>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <h1>Name</h1>
                    <input type="text" onChange={this.update('name')} value={this.state.name} placeholder="Full Name"></input>
                  </div>
                  <div>
                    <h1>Username</h1>
                    <input type="text" onChange={this.update('username')} value={this.state.username} placeholder="username"></input>
                  </div>
                  <div>
                    <h1>Bio</h1>
                    <input type="text" onChange={this.update('bio')} value={this.state.bio} placeholder="Bio"></input>
                  </div>
                  <div>
                    <h1> </h1>
                    <input type="submit" value="Submit"></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default UserEdit;
