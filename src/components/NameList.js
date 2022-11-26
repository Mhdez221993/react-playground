import Person from './Person';
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

  const personList = persons.map(person => <Person person={person} key={person.id} />)

  return (
    <div>
      {
        personList
      }
    </div>
  );
};

export default NameList;