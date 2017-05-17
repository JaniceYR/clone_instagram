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

  componentDidMount() {
    this.props.resetError();
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

  renderErrors() {
    return(
      <ul className='error-text'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === 'login') {
      return (
        <div className="session_frame">
          <div className="session_phone_background">
            <figure className="session_phone_sample"></figure>
          </div>
        <br/>

          <div className="session_input_frame_parant">
            <div className="session_input_frame">
              <figure className="logo-session "></figure>
              <button onClick={this.demoIdLogIn} className="session_submit_button">
                Demo ID Log In
              </button>
              <br/>

              <div className="session_separator">
                <div className="separator-line"></div>
                <div className="separator-text"> OR </div>
                <div className="separator-line"></div>
              </div>
              <br/>

              <form onSubmit={this.handleSubmit} className="session_input_form">
                <input type="text" value={this.state.username} onChange={this.update('username')}
                  placeholder="Username" className="session_input"
                  />
                <input type="password" value={this.state.password} onChange={this.update('password')}
                  placeholder="Password" className="session_input"
                  />
                <input type="submit" value="Log in" className="session_submit_button"/>
                <br/>
              </form>
              {this.renderErrors()}
            </div>

            <div className="session_input_frame">
              <div className="nav-link">
                Don't have an account? <Link to="/signup" className="link_text">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="session_frame">
          <div className="session_phone_background">
            <figure className="session_phone_sample"></figure>
          </div>
          <br/>

          <div className="session_input_frame_parant">
            <div className="session_input_frame">
              <figure className="logo-session "></figure>
              <div className="signup_comment">
                Sign up to see photos and<br/>
              videos from your friends.
            </div>
              <button onClick={this.demoIdLogIn} className="session_submit_button">
                Demo ID Log In
              </button>
              <br/>

              <div className="session_separator">
                <div className="separator-line"></div>
                <div className="separator-text"> OR </div>
                <div className="separator-line"></div>
              </div>
              <br/>

              <form onSubmit={this.handleSubmit} className="session_input_form">
                <input type="text" value={this.state.name} onChange={this.update('name')}
                  placeholder="Full Name" className="session_input"
                  />
                <input type="text" value={this.state.username} onChange={this.update('username')}
                  placeholder="Username" className="session_input"
                  />
                <input type="password" value={this.state.password} onChange={this.update('password')}
                  placeholder="Password" className="session_input"
                  />
                <input type="submit" value="Sign up" className="session_submit_button"/>
              </form>
              {this.renderErrors()}
              <div className="signup_terms">
                By signing up, you agree to our<br/>
                Terms & Privacy Policy.
              </div>
            </div>

            <div className="session_input_frame">
              <div className="nav-link">
                Have an account? <Link to="/login" className="link_text">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);
