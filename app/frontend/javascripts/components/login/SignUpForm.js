import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SignUpForm extends React.Component {
  render() {
    return <div>SignUpForm</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
