import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import { selectChannel } from '../../actions/channelActions';

const cardStyle = {
  display: "inline-block",
  width: "25%",
  height: 500,
  marginRight: 10
}

class ChannelList extends React.Component {
  render() {
    let channels = this.props.channels.map(channel => {
      return (
        <div key={channel.id} onClick={() => this.props.selectChannel(channel.id)}>
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
    selectChannel: selectChannel
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
