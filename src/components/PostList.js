import React, { Component } from 'react';

import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
       posts: [],
       errorMsg: ''
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({ posts: res.data})
      })
      .catch(e => {
        console.log(e)
        this.setState({errorMsg: 'Error retrieving posts'})
      })
  }

  render() {
    const {posts} = this.state

    return (
      <div>
          <h1>List of post</h1>
          {
            posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>)
            : <h2>errorMsg</h2>
          }
      </div>
    );
  }
}

export default PostList;
