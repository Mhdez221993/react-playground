import React, { Component } from 'react';

class HoverCounterTwo extends Component {
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

    return <button onMouseOver={this.handleClick}>Clicked {count} timex</button>
  }
}

export default HoverCounterTwo;
