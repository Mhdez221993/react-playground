import React, { useEffect, useReducer } from 'react';

import axios from 'axios';

const initicialState = {
  isLoading: false,
  post: {},
  error: ''
}

const render = (state, action) => {
  switch (action.type) {
    case 'POST_SUCCESS':
      return {
        isLoading: false,
        post: action.payload,
        error: ''
      }

    case 'POST_ERROR':
      return {
        isLoading: false,
        post: {},
        error: 'something went wrong!'
      }

    default:
      return state
  }
}

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(render, initicialState)


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/2')
      .then((res => {
        dispatch({type: 'POST_SUCCESS', payload: res.data})
      }))
      .catch((err) => {
        dispatch({type: 'POST_ERROR'})
      })
  }, [])

  return (
    <div>
      <h1>
        {state.isLoading ? 'Loading...' : state.post.title}
        {state.error ? 'error' : null}
      </h1>
    </div>
  );
};

export default DataFetchingTwo;