import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginForm extends React.Component {
  render() {
    return <div>LoginForm</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
