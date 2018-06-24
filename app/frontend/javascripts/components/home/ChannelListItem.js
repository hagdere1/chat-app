import React from 'react';

const styles = {
  channelItem: {
    position: "relative",
    fontWeight: "bold",
    height: 50,
    padding: "7px 12px",
    borderBottom: "2px solid #eee",
    cursor: "pointer"
  }
}

class ChannelListItem extends React.Component {
  render() {
    return (
      <div className="channel-item"
           style={Object.assign({}, styles.channelItem, {backgroundColor: this.props.isSelected ? "#deeff5" : "#f0f8ff"})}
           onClick={this.props.select}>
        <span style={{position: "absolute", top: 22}}>{this.props.channel.name}</span>
      </div>
    );
  }
}

export default ChannelListItem;
