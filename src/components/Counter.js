import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }

  incrementCounter() {
    // this.setState(
    //   {
    //     counter: this.state.counter + 1
    //   },
    //   () => console.log('Callback value = ', this.state.counter)
    // )

    // console.log(this.state.counter);

    this.setState(prev => ({
      counter: prev.counter + 1
    }))
  }

  incrementFive() {
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter