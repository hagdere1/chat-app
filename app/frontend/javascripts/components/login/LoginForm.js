import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserApi from '../../api/userApi';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
    }

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  // Change login to use username instead of email to sign in
  handleChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  submit() {
    let user = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.login(user);
  }

  render() {
    return (
      <div style={{position: "absolute", top: 100, left: 200, backgroundColor: "white", height: 350, width: 400, borderRadius: 2}}>
        <div>
          <p>Email</p>
          <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />

          {/*<p>Username</p>
          <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />*/}

          <p>Password</p>
          <input type="text" value={this.state.password} onChange={this.handleChangePassword} />

          <div onClick={this.submit}>Submit</div>

          <div>Not a member? <span onClick={this.props.toggleForm}>Sign Up</span></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login: UserApi.login
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
