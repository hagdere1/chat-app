import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import { ActionCable } from 'react-actioncable-provider';
import axios from 'axios';
import { axiosConfig } from '../../api/axiosConfig';
import { receiveMessage } from '../../actions/messageActions';

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
    this.sendMessage = this.sendMessage.bind(this);
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleContentChange(e) {
    this.setState({content: e.target.value});
  }

  handleReceivedMessage(response) {
    if (response.message.channel_id === this.props.selectedChannel) {
      this.props.receiveMessage(response.message);
    }
  }

  sendMessage() {
    let token = this.props.currentUser.auth_token;
    let message = {
      user_id: this.props.currentUser.id,
      content: this.state.content
    }

    axios.post("/channels/" + this.props.selectedChannel + "/messages/", message, axiosConfig(token));

    this.setState({ content: "" });
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

        <ActionCable channel={{channel: "MessagesChannel", channelId: selectedChannel}}
                     onReceived={this.handleReceivedMessage} />

        {this.props.messages.map(message => <div key={message.id}>{message.content}</div>)}

        {messageBox}
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channel.channels,
    selectedChannel: state.channel.selectedChannel,
    messages: state.message.messages,
    currentUser: state.user.currentUser
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    receiveMessage: receiveMessage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow)
