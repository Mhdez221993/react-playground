import React, { Component } from 'react';

const withCounter = (WrappedComponent, number) => {

  class WithCounter extends Component {
    constructor(props) {
      super(props)

      this.state = {
         count: 0
      }
    }

    incrementCounter = () => {
      this.setState(prevState => ({count: prevState.count + number}))
    }

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props}
        />
      )
    }
  }

  return WithCounter
};

export default withCounter;