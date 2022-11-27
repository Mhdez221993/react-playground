import React, { useEffect, useState } from 'react';

import axios from 'axios';

const DataFetchingOne = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res => {
        setIsLoading(false)
        setError('')
        setPost(res.data)
      }))
      .catch((err) => {
        setIsLoading(false)
        setPost({})
        setError('something went wrong!')
      })
  }, [])

  return (
    <div>
      <h1>
        {isLoading ? 'Loading...' : post.title}
        {error ? 'error' : null}
      </h1>
    </div>
  );
};

export default DataFetchingOne;