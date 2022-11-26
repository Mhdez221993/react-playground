import React, { Component } from 'react';

import axios from 'axios';

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
       userId: '',
       title: '',
       body: ''
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    const { userId, title, body } = this.state

    return (
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.handleSubmit}>
        <div>
            <input type="text" name="userId" value={userId} onChange={this.handleInput} />
          </div>
          <br />
          <div>
            <input type="text" name="title" value={title} onChange={this.handleInput} />
          </div>
          <br />
          <div>
            <input type="text" name="body" value={body} onChange={this.handleInput} />
          </div>
          <br />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;