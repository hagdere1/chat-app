import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginPage extends React.Component {
  render() {
    return <div>LoginPage</div>;
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
