import React, { Component } from 'react';
import FlashMsg from './FlashMsg';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../actions/FlashMsg'

class FlashMsgList extends Component {
  render() {
    const messages = this.props.messages.map(message => 
      <FlashMsg key={message.id} message={message} 
      deleteFlashMessage = { this.props.deleteFlashMessage } />
    )
    return (
      <div>
        {messages}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.flashmsg
  }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMsgList);