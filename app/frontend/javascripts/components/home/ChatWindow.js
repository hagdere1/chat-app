import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import { ActionCable } from 'react-actioncable-provider';
import axios from 'axios';
import { axiosConfig } from '../../api/axiosConfig';

const cardStyle = {
  display: "inline-block",
  width: "55%",
  height: 500
}

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }

    this.handleContentChange = this.handleContentChange.bind(this);
  }

  handleContentChange(e) {
    this.setState({content: e.target.value});
  }

  sendMessage() {
    let token = this.props.currentUser.auth_token;
    let message = {
      user_id: this.props.currentUser.id,
      channel_id: this.props.selectChannel,
      content: this.state.content
    }

    axios.post("/messages", message, axiosConfig(token));
  }

  render() {
    let selectedChannel = this.props.selectedChannel;
    let messageBox = this.props.selectedChannel ? (
      <div style={{height: 150, borderTop: "1px solid #ccc"}}>
        <input type="text" value={this.state.content} onChange={this.handleContentChange} />
        <div onClick={this.sendMessage}>SEND</div>
      </div>
    ) : <div></div>;

    return (
      <Card style={cardStyle}>
        {selectedChannel ?
        this.props.channels.find(channel => channel.id === selectedChannel).name :
        "Select a Channel"}

        <ActionCable channel={{channel: "MessagesChannel"}}
                     onReceived={() => console.log("Message received!")} />

        {messageBox}
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channel.channels,
    selectedChannel: state.channel.selectedChannel,
    currentUser: state.user.currentUser
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow)
