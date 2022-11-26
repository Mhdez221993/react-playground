import React, { Component } from 'react';

import UpdatedComponent from './withCounter';

class ClickCounter extends Component {
  render() {
    const {count, incrementCounter, name} = this.props

    return <button onClick={incrementCounter}>{name} Cliked {count} times</button>
  }
}

export default UpdatedComponent(ClickCounter)