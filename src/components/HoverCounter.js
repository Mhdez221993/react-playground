import React, { Component } from 'react';

class HoverCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  incrementHover = (counter) => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return <h1 onMouseOver={this.incrementHover}>Cliked {count} times</h1>
  }
}

export default HoverCounter;
