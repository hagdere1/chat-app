import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { axiosConfig } from '../../api/axiosConfig';
import TextField from '../TextField';
import Button from '@material-ui/core/Button';
import MessageApi from '../../api/messageApi';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }

    this.handleContentChange = this.handleContentChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleContentChange(e) {
    this.setState({content: e.target.value});
  }

  sendMessage() {
    let message = {
      user_id: this.props.currentUser.id,
      content: this.state.content
    }

    this.props.createMessage(message, this.props.selectedChannel, this.props.currentUser.auth_token);
    this.props.scrollToBottom();
    this.setState({ content: "" });
  }

  render() {
    let selectedChannel = this.props.selectedChannel;

    if (!selectedChannel) {
      return <div></div>;
    }

    return (
      <div style={{height: 100, borderTop: "1px solid #ccc", width: "100%"}}>
        <div style={{verticalAlign: "bottom", marginTop: 10, marginLeft: 20}}>
          <TextField value={this.state.content}
                     width={380}
                     inputLabel={"Write a message..."}
                     handleTextChange={this.handleContentChange} />
          <Button onClick={this.sendMessage} style={{display: "inline-block", marginLeft: 10}} color="primary">SEND</Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.channel.selectedChannel,
    currentUser: state.user.currentUser
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createMessage: MessageApi.createMessage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox)
