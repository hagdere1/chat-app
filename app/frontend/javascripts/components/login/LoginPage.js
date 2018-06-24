import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    if (this.props.currentUserFetching) {
      return (
        <div style={{height: "100vh", position: "relative"}}>
          <div style={{position: "absolute", top: "40%", left: "calc(50% - 25px)"}}>
            <CircularProgress size={50} />
          </div>
        </div>
      );
    }

    return (
      <div style={{height: "100vh", position: "relative", background: "linear-gradient(to bottom, #3f51b5 0%,#3f51b5 40%,#000000 40%,#eee 40%,#eee 100%)"}}>
        <h1 style={{fontSize: "1.3125rem", fontWeight: 500, color: "#fff", padding: "17px 20px"}}>LoftSmart Chat</h1>

        {this.state.signUp ? <SignUpForm toggleForm={this.toggleForm} /> : <LoginForm toggleForm={this.toggleForm} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUserFetching: state.user.fetching
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
