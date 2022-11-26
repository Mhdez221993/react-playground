import React, { Component } from 'react';

import ModalPoaltal from './ModalPoaltal';

const modalStyle = {
  width: '400px',
  margin: '0 auto',
  textAlign: 'left'
}

class Portal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      closed: false
    }
  }

  handleClose = () => {
    this.setState({
      closed: !this.state.closed
    })
  }

  render() {
    return (
      <div style={modalStyle}>
        <h1>My App</h1>
        <p>
            This is an example of how you might
            use React.createPortal. I think it is a
            pretty neat API that is yet another awesome
            escape hatch that React provides for
            practical reasons. Sometimes you just need to
            render something completely outside the React Tree.
        </p>

        <br />
          <button onClick={this.handleClose}>Show Secret Modal</button>
          {this.state.closed && <ModalPoaltal handleClose={this.handleClose} />}
      </div>
    );
  }
}

export default Portal;
