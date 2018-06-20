import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginPage from './login/LoginPage';
import Home from './home/Home';
import { getCookie } from '../util/auth';
import { setCurrentUserFromCookie } from '../actions/userActions';

class Container extends React.Component {
  componentDidMount() {
    let currentUser = getCookie("currentUser");

    if (currentUser) {
      this.props.setCurrentUserFromCookie(JSON.parse(currentUser));
    }
  }


  render() {
    let currentUser = getCookie("currentUser");

    if (this.props.currentUser.auth_token) {
      return <Home />;
    } else {
      return <LoginPage />;
    }
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setCurrentUserFromCookie: setCurrentUserFromCookie
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
