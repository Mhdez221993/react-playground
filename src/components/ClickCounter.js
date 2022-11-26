import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  incrementCounter = (counter) => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return <button onClick={this.incrementCounter}>Cliked {count} times</button>
  }
}

export default ClickCounter;