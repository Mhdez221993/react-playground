import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor() {
    super()
    this.state = {
      isLoged: false
    }
  }

  render() {
    return this.state.isLoged && <div>Welcome John</div>

    // return(
    //   this.state.isLogged ?
    //   <div>Welcome John</div> :
    //   <div>Welcome Guess</div>

    // )

    // let message;

    // if (this.state.isLoged) {
    //   message = <div>Welcome John</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }

    // return message
  }
}

export default UserGreeting
