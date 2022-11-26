import React, { Component } from 'react';

class ClickCounterTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  handleClick = () => {
    this.setState(prev => ({count: prev.count + 1}))
  }

  render() {
    const {count} = this.state

    return <button onClick={this.handleClick}>Clicked {count} timex</button>
  }
}

export default ClickCounterTwo;
