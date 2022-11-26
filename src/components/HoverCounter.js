import React, { Component } from 'react';

import UpdatedComponent from './withCounter';

class HoverCounter extends Component {
  render() {
    const {count, incrementCounter, name} = this.props

    return <button onMouseOver={incrementCounter}>{name} Hoverd {count} times</button>
  }
}

export default UpdatedComponent(HoverCounter);
