import React, { Component } from 'react';

import MemoComp from './MemoComp';

class ParentComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Peter'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Peter'
      })
    }, 2000)
  }

  render() {
    console.log('******************ParentComp****************')
    return (
      <div>
        <h1>ParentComp</h1>
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}

        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;