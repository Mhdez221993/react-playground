import React, { Fragment } from 'react';

const Columns = () => {
  const items = []

  return (
    <>
      {
        items.map(item => (
          <Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
          </Fragment>
        ))
      }
      <td>Name</td>
      <td>Peter</td>
    </>
  );
};

export default Columns;