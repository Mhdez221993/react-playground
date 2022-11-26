import React from 'react';

const NameList = () => {
  const persons = [
    {
      id: 1,
      name: 'John',
      age: 29,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Vishua',
      age: 40,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Peter',
      age: 31,
      skill: 'Vue'
    }
  ]

  const names = ['Peter', 'Clark', 'John', 'Peter']

  const nameList = names.map((name, i) => <h2 key={i}>{name}</h2>)

  return (
    <div>
      {
        nameList
      }
    </div>
  );
};

export default NameList;