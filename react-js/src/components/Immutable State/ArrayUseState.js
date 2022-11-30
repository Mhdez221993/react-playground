import React, { useState } from 'react';

const initicialState = ['Bruce', 'Wayne']

const ArrayUseState = () => {
  const [persons, setPerson] = useState(initicialState)

  const handleClick = () => {
    // persons.push('Clark')
    // persons.push('Kent')
    const newPersons = [...persons]
    newPersons.push('Peter')
    newPersons.push('Doe')
    setPerson(newPersons)
  }

  console.log('ArrayUseState render');
  return (
    <div>
      <button onClick={handleClick}>Clic</button>
      <div>
        {
          persons.map((person, i) => <span key={i}>{person}</span>)
        }
      </div>
    </div>
  );
};

export default ArrayUseState
