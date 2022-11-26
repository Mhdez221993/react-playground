import React, { Component } from 'react';

import ReactDOM from 'react-dom';

const blurModalStyle = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.3)',
}

const modalStyle = {
  padding: 20,
  background: '#fff',
  borderRadius: '2px',
  display: 'inline-block',
  minHeight: '300px',
  margin: '1rem',
  position: 'relative',
  minWidth: '300px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  justifySelf: 'center',
}

class ModalPoaltal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div style={blurModalStyle}>
        <div style={modalStyle}>
          <h3>This the secret modal in the portal root</h3>
          <p>--------------------------------------------</p>
          <button onClick={this.props.handleClose}>Close</button>
        </div>
      </div>,
      document.getElementById('portal-root')
    )
  }
}

export default ModalPoaltal;