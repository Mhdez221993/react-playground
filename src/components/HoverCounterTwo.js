import React, { Component } from 'react';

class HoverCounterTwo extends Component {
  render() {
    const {count, incrementCount} = this.props

    return <button onMouseOver={incrementCount}>Hovered {count} timex</button>
  }
}

export default HoverCounterTwo;
