import React, { Component, createRef } from 'react'

import Input from './Input'

class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.parenRef = createRef()
  }

  clickHandler = () => {
    this.parenRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <Input ref={this.parenRef} />
        <br />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default FocusInput

