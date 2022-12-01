import React, { useEffect, useState } from 'react';

import axios from 'axios';

const DataFetching = () => {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButton, setIdFromButtonClick] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((e) => {
        console.log(e);
      })
  }, [idFromButton])

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Find Post by ID</button>
      <ul>
          {/* posts.map((post) => <li key={post.id}>{post.title}</li>) */}
         <li key={post.id}>{post.title}</li>
      </ul>
    </div>
  );
};

export default DataFetching
