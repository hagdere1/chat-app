import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserApi from '../../api/userApi';
import axios from 'axios';
import TextField from '../TextField';
import Button from '@material-ui/core/Button';

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
      <div style={{boxShadow: "1px 2px #ccc", border: "1px solid #eee",position: "absolute", paddingTop: 15, paddingBottom: 15, top: 0, bottom: 0, left: 0, right: 0, margin: "auto", backgroundColor: "white", minHeight: 215, maxHeight: 215, width: 400, borderRadius: 2}}>
        <div style={{display: "inline-block", marginLeft: 42, width: 300}}>
          <TextField value={this.state.email}
                     error={!!this.props.error}
                     width={300}
                     inputLabel={"Email"}
                     handleTextChange={this.handleChangeEmail} />

          {/*<p>Username</p>
          <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />*/}

          <TextField value={this.state.password}
                     error={!!this.props.error}
                     width={300}
                     inputLabel={"Password"}
                     type={"password"}
                     handleTextChange={this.handleChangePassword} />

            <div style={{display: "inline-block", marginLeft: 8, marginTop: 20}}><Button onClick={this.submit} variant="contained" color="primary">Sign In</Button></div>

            <div style={{display: "inline-block", marginTop: 10, marginLeft: 20, fontSize: 12}}>
              <span>Not a member?</span>
              <span style={{color: "#0000ff", marginLeft: 5, cursor: "pointer"}} onClick={this.props.toggleForm}>Sign Up</span>
            </div>

            {this.props.error ? <p style={{marginLeft: 8, marginTop: 10, fontSize: 12, color: "#f44336"}}>{this.props.error}</p> : <p></p>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.user.error
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login: UserApi.login
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
