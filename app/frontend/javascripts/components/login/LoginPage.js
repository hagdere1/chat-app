import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signUp: false
    }
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({ signUp: !this.state.signUp });
  }

  render() {
    return (
      <div style={{height: "100vh", position: "relative"}}>
        <div style={{backgroundColor: "#3f51b5", height: "40%", width: "100%"}}>
          <h1 style={{fontSize: "1.3125rem", fontWeight: 500, color: "#fff", padding: "17px 20px"}}>LoftSmart Chat</h1>
        </div>
        <div style={{backgroundColor: "#deeff5", height: "60%", width: "100%"}}></div>

        {this.state.signUp ? <SignUpForm toggleForm={this.toggleForm} /> : <LoginForm toggleForm={this.toggleForm} />}
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

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
