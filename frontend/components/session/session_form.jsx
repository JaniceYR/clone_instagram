import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoIdLogIn = this.demoIdLogIn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoIdLogIn(e) {
    e.preventDefault();
    this.props.demoLogin();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <div>
          Don't have an account? <Link to="/signup" className="link_text">Sign up</Link>
        </div>
      );
    } else {
      return (
        <div>
          Have an account? <Link to="/login" className="link_text">Log in</Link>
        </div>
      );
    }
  }

  navSubmitButton() {
    if (this.props.formType === 'login') {
      return (
        <input type="submit" value="Log in" className="session_submit_button"/>
      );
    } else {
      return (
        <input type="submit" value="Sign up" className="session_submit_button"/>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  inputLogin() {
    return (
      <div>
        <label>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            placeholder="Username"
            className="session_input"
            />
        </label>
        <br/>
        <label>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
            className="session_input"
            />
        </label>
        <br/>
      </div>
    );
  }

  inputSignup() {
    return (
      <div>
        <label>
          <input type="text"
            value={this.state.name}
            onChange={this.update('name')}
            placeholder="Full Name"
            className="session_input"
          />
        </label>
        <br/>
        <label>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            placeholder="Username"
            className="session_input"
          />
        </label>
        <br/>
        <label>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
            className="session_input"
          />
        </label>
        <br/>
      </div>
    );
  }

  inputInformation() {
    if(this.props.formType === 'login') {
      return this.inputLogin();
    } else {
      return this.inputSignup();
    }
  }

  render() {
      return (
        <div>
          <figure className="session_phone_background"></figure>

          <br/>
          {this.renderErrors()}

          <div className="session_frame">
            <figure className="logo"></figure>
            <button onClick={this.demoIdLogIn} className="session_submit_button">Demo ID Log In</button>
            <br/>
            OR

            <form onSubmit={this.handleSubmit} >
            {this.inputInformation()}
            {this.navSubmitButton()}
            <br/>
            </form>
          </div>

          <div>
            {this.navLink()}
          </div>
        </div>
      );
  }
}

export default withRouter(SessionForm);
