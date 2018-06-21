import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserApi from '../../api/userApi';
import ChannelApi from '../../api/channelApi';
import ChannelList from './ChannelList';
import ChatWindow from './ChatWindow';
import MenuAppBar from './MenuAppBar';
import Card from '@material-ui/core/Card';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchAllChannels(this.props.currentUser.auth_token);
  }

  render() {
    return (
      <div style={{height: "100%"}}>
        <MenuAppBar />

        <Card style={{margin: "auto", width: "100%", maxWidth: 1010}}>
          <ChannelList />
          <ChatWindow />
        </Card>
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
