import React, { Component, createRef } from 'react';

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus()
    console.log(this.inputRef);
  }

  handleClick = () => {
    alert(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.inputRef}
        />

        <br />
        <button
          onClick={this.handleClick}
        >Click</button>
      </div>
    );
  }
}

export default RefsDemo;