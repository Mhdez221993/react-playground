import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const {name, children} = this.props
    // const {state1} = this.state

    return (
      <div>
        <h1>{ name }</h1>
        <p>{ children }</p>
      </div>
    )
  }
};

export default Welcome;