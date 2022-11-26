import React, { useEffect, useState } from 'react';

import axios from 'axios';

const DataFetching = () => {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPosts([...posts, res.data])
      })
      .catch((e) => {
        console.log(e);
      })
  }, [id])

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <ul>
        {
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  );
};

export default DataFetching
