import React, { Component } from 'react';

const UpdatedComponent = OriginalComponent => {

  class NewComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
         count: 0
      }
    }

    incrementCounter = () => {
      this.setState(prevState => ({count: prevState.count + 1}))
    }

    render() {

      return <OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter} name='Doe' />
    }
  }

  return NewComponent
};

export default UpdatedComponent;