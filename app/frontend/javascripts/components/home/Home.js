import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserApi from '../../api/userApi';
import ChannelApi from '../../api/channelApi';
import ChannelList from './ChannelList';
import ChatWindow from './ChatWindow';
import MenuAppBar from './MenuAppBar';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchAllChannels(this.props.currentUser.auth_token);
  }

  render() {
    return (
      <div style={{maxWidth: 1010, margin: "auto"}}>
        <Grid container={true}>
          <Grid item={true} xs={12} >
            <MenuAppBar />
          </Grid>

          <Grid item={true} xs={12}>
            <Card style={{margin: "auto"}}>
              <Grid container={true}>
                <Grid item={true} xs={4}>
                  <ChannelList />
                </Grid>
                <Grid item={true} xs={8}>
                  <ChatWindow />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
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
