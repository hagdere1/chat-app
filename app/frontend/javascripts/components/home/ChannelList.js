import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import { selectChannel } from '../../actions/channelActions';
import MessageApi from '../../api/messageApi';

const cardStyle = {
  display: "inline-block",
  width: "calc(30% - 2px)",
  borderRight: "2px solid #eee",
  height: 500,
  verticalAlign: "top"
}

class ChannelList extends React.Component {
  constructor(props) {
    super(props);

    this.selectChannel = this.selectChannel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.channelsFetched && nextProps.channelsFetched) {
      this.selectChannel(nextProps.channels.find(channel => channel.name === "General").id);
    }
  }

  selectChannel(id) {
    if (id !== this.props.selectedChannel) {
      this.props.selectChannel(id);
      this.props.fetchMessages(id, this.props.currentUser.auth_token);
    }
  }

  render() {
    let selectedChannel = this.props.selectedChannel;
    let channels = this.props.channels.map(channel => {
      let isSelected = channel.id === selectedChannel;
      return (
        <div className="channel-item" key={channel.id} style={{position: "relative", fontWeight: "bold", backgroundColor: "#f0f8ff", height: 50, padding: "7px 12px", borderBottom: "2px solid #eee", cursor: "pointer"}} onClick={() => this.selectChannel(channel.id)}>
          <span style={{position: "absolute", top: 22}}>{channel.name}</span>
        </div>
      );
    });

    return (
      <div style={cardStyle}>
        {channels}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.channel.selectedChannel,
    channels: state.channel.channels,
    channelsFetched: state.channel.fetched,
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
