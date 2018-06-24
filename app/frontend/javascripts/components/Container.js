import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginPage from './login/LoginPage';
import Home from './home/Home';
import { getCookie } from '../util/auth';
import UserApi from '../api/userApi';

class Container extends React.Component {
  componentDidMount() {
    let token = getCookie("token");

    if (token) {
      this.props.fetchCurrentUser(token);
    }
  }

  render() {
    if (this.props.currentUser && this.props.currentUser.auth_token) {
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
    fetchCurrentUser: UserApi.fetchCurrentUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
