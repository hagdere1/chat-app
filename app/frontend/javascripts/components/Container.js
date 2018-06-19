import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Container extends React.Component {
  render() {
    return <div>Container / Login Page</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Container)
