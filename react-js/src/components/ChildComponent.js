import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render(props) {
    return (
      <button onClick={() => this.props.greetHandler('Child')}>Child Component</button>
    )
  }
}
