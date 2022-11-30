import React, { Component } from 'react';

export default class EvenBind extends Component {
  constructor(props) {
    super(props)
    // this.clickHandler = this.clickHandler.bind(this)
    this.state = {
      message: 'Hello!'
    }
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye!'
  //   })
  //   console.log(this);
  // }

  clickHandler = () => {
    this.setState({
      message: 'Goodbye!'
    })
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1>{ this.state.message }</h1>
        {/* <button onClick={() => this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>

      </div>
    )
  }
}
