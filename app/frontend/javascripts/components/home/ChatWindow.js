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
import MessageApi from '../../api/messageApi';

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

    this.handleContentChange = this.handleContentChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
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
    let token = this.props.currentUser.auth_token;
    let message = {
      user_id: this.props.currentUser.id,
      content: this.state.content
    }

    this.props.createMessage(message, this.props.selectedChannel, token);
    // axios.post("/channels/" + this.props.selectedChannel + "/messages/", message, axiosConfig(token));

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
    let selectedChannel = this.props.selectedChannel;

    let messageBox = selectedChannel ? (
      <div style={{height: 100, borderTop: "1px solid #ccc", width: "100%"}}>
        <div style={{verticalAlign: "bottom", marginTop: 10, marginLeft: 20}}>
          <TextField value={this.state.content}
                     width={380}
                     inputLabel={"Write a message..."}
                     handleTextChange={this.handleContentChange} />
          <Button onClick={this.sendMessage} style={{display: "inline-block", marginLeft: 10}} color="primary">SEND</Button>
        </div>
      </div>
    ) : <div></div>;

    let selectAChannel = <p style={{margin: "auto", textAlign: "center", marginTop: 150}}>Select a Channel</p>;

    return (
      <div style={cardStyle}>
        <div id="chatwindow" style={{height: 400, overflowY: "scroll", overflowX: "hidden", width: "100%"}}>
          <ActionCable channel={{channel: "MessagesChannel", channelId: selectedChannel}}
                       onReceived={this.handleReceivedMessage} />

           {selectedChannel ? <MessageList messages={this.props.messages} /> : <div></div>}

        </div>

        {messageBox}
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
    createMessage: MessageApi.createMessage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow)
