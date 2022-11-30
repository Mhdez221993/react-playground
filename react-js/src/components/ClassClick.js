import React, { Component } from 'react';

class ClassClick extends Component {
  handleClick() {
    console.log('button clicked in class component');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

export default ClassClick;
