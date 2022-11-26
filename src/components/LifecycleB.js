import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Peter'
    }

    console.log('LifecycleB constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDrivedStateFromProps');
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount');
  }

  render() {
    console.log('LifecycleB render');
    return (
      <div>Lifecycle B</div>
    )
  }
}

export default LifecycleB
