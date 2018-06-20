import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginPage from './login/LoginPage';
import Home from './home/Home';

class Container extends React.Component {
  render() {
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

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
