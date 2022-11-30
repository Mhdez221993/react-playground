import React, { useCallback, useState } from 'react';

import Button from './Button';
import Count from './Count';
import Title from './Title';

const ParentComponentTwo = () => {
  const [age, setAge] = useState(0)
  const [salary, setSalary] = useState(0)

  const incremetAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])

  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={incremetAge} >Increment Age</Button>

      <Count text='Salary' count={salary} />
      <Button handleClick={incrementSalary} >Increment Salary</Button>
    </div>
  );
};

export default ParentComponentTwo
