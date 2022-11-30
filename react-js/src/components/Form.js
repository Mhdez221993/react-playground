import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      comments: '',
      topic: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleComments = (e) => {
    this.setState({
      comments: e.target.value
    })
  }

  handleTopic = (e) => {
    this.setState({
      topic: e.target.value
    })
  }

  handleSubmit = (e) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    e.preventDefault()
  }

  render() {
    const { username, comments, topic } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Form component</h1>

        <div>
          <label>Username</label>
          <br />
          <input
            type="text"
            onChange={this.handleInput}
            value={username}
          />
        </div>

        <div>
          <label>Comments</label>
          <br />
          <textarea
            onChange={this.handleComments}
            value={comments}
          ></textarea>
        </div>

        <div>
          <label>Topic</label>
          <br />
          <select
            value={topic}
            onChange={this.handleTopic}
          >
            <option value="" hidden></option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
