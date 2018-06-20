import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import { selectChannel } from '../../actions/channelActions';
import MessageApi from '../../api/messageApi';

const cardStyle = {
  display: "inline-block",
  width: "25%",
  height: 500,
  marginRight: 10
}

class ChannelList extends React.Component {
  constructor(props) {
    super(props);

    this.selectChannel = this.selectChannel.bind(this);
  }

  selectChannel(id) {
    this.props.selectChannel(id);
    this.props.fetchMessages(id, this.props.currentUser.auth_token);
  }

  render() {
    let channels = this.props.channels.map(channel => {
      return (
        <div key={channel.id} onClick={() => this.selectChannel(channel.id)}>
          <b>{channel.name}</b>
        </div>
      );
    });

    return (
      <Card style={cardStyle}>
        {channels}
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channel.channels,
    currentUser: state.user.currentUser
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectChannel: selectChannel,
    fetchMessages: MessageApi.fetchChannelMessages
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
