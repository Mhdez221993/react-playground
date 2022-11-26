import React, { Component, createRef } from 'react'

import ForwardingRefInput from './ForwardingRefInput'

export class ForwardingRefParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
  }

  handleClick = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <ForwardingRefInput ref={this.inputRef} />
        <br />
        <button onClick={this.handleClick}>Fucus</button>
      </div>
    )
  }
}

export default ForwardingRefParentInput