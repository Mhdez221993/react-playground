import React, { Component } from 'react';

class Message extends Component {
  constructor(){
    super()
    this.state = {
      messge: 'Welcome visitors'
    }
  }

  changeMessage() {
    this.setState({
      messge: 'Thank you for registering'
    })
  }

  render() {
    return (
      <div>
        <h1>
            {this.state.messge}
        </h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
};

export default Message;
