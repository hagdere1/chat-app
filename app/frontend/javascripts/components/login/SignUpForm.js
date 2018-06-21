import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserApi from '../../api/userApi';
import axios from 'axios';
import TextField from '../TextField';
import Button from '@material-ui/core/Button';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      passwordConfirmation: ""
    }

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordConfirmation = this.handleChangePasswordConfirmation.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleChangePasswordConfirmation(e) {
    this.setState({ passwordConfirmation: e.target.value });
  }

  submit() {
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password_confirmation: this.state.passwordConfirmation
    }

    this.props.signUp(user);
  }

  render() {
    return (
      <div style={{boxShadow: "1px 2px #ccc", border: "1px solid #eee", position: "absolute", paddingTop: 15, top: 0, bottom: 0, left: 0, right: 0, margin: "auto", backgroundColor: "white", height: 345, width: 400, borderRadius: 2}}>
        <div style={{display: "inline-block", marginLeft: 42, width: 300}}>
          <TextField value={this.state.email}
                     width={300}
                     inputLabel={"Email"}
                     handleTextChange={this.handleChangeEmail} />

          <TextField value={this.state.username}
                     width={300}
                     inputLabel={"Username"}
                     handleTextChange={this.handleChangeUsername} />

          <TextField value={this.state.password}
                     type={"password"}
                     width={300}
                     inputLabel={"Password"}
                     handleTextChange={this.handleChangePassword} />

          <TextField value={this.state.passwordConfirmation}
                     type={"password"}
                     width={300}
                     inputLabel={"Password"}
                     handleTextChange={this.handleChangePasswordConfirmation} />

          <div style={{display: "inline-block", marginLeft: 8, marginTop: 20}}>
            <Button onClick={this.submit} variant="contained" color="primary">Sign Up</Button>
          </div>

          <div style={{display: "inline-block", marginTop: 10, marginLeft: 20, fontSize: 12}}>
            <span>Already a member?</span>
            <span style={{color: "#0000ff", marginLeft: 5, cursor: "pointer"}} onClick={this.props.toggleForm}>Sign In</span>
          </div>
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
    signUp: UserApi.signUp
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
