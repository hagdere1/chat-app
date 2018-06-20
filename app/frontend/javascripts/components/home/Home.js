import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserApi from '../../api/userApi';
import ChannelApi from '../../api/channelApi';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchAllChannels(this.props.currentUser.auth_token);
  }

  render() {
    return (
      <div style={{height: "100%"}}>
        Home
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout: UserApi.logout,
    fetchAllChannels: ChannelApi.fetchAllChannels
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
