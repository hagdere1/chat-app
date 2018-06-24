import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import { ActionCable } from 'react-actioncable-provider';
import axios from 'axios';
import { axiosConfig } from '../../api/axiosConfig';
import { animateScroll } from "react-scroll";
import { receiveMessage } from '../../actions/messageActions';
import TextField from '../TextField';
import Button from '@material-ui/core/Button';
import MessageList from './MessageList';
import MessageBox from './MessageBox';

const cardStyle = {
  display: "inline-block",
  width: "70%",
  height: 500,
  verticalAlign: "top",
  position: "relative"
}

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }

    // this.handleContentChange = this.handleContentChange.bind(this);
    // this.sendMessage = this.sendMessage.bind(this);
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.messages !== nextProps.messages) {
      this.scrollToBottom();
    }
  }

  handleContentChange(e) {
    this.setState({content: e.target.value});
  }

  handleReceivedMessage(response) {
    if (response.message.channel_id === this.props.selectedChannel) {
      this.props.receiveMessage(response.message);
      this.scrollToBottom();
    }
  }

  sendMessage() {
    let message = {
      user_id: this.props.currentUser.id,
      content: this.state.content
    }

    this.props.createMessage(message, this.props.selectedChannel, this.props.currentUser.auth_token);
    this.scrollToBottom();
    this.setState({ content: "" });
  }

  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "chatwindow",
      duration: 50
    });
  }

  render() {
    // Placeholder if no channel selected - currently user unable to deselect all chatrooms
    let selectAChannel = <p style={{margin: "auto", textAlign: "center", marginTop: 150}}>Select a Channel</p>;

    return (
      <div style={cardStyle}>
        <div id="chatwindow" style={{height: 400, overflowY: "scroll", overflowX: "hidden", width: "100%"}}>
          <ActionCable channel={{channel: "MessagesChannel", channelId: this.props.selectedChannel}}
                       onReceived={this.handleReceivedMessage} />

          {this.props.selectedChannel ? <MessageList messages={this.props.messages} /> : <div></div>}
        </div>

        <MessageBox scrollToBottom={this.scrollToBottom} />
      </div>
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
    receiveMessage: receiveMessage,
    // createMessage: MessageApi.createMessage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow)
