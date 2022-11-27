import React, { useMemo, useState } from 'react';

const CounterThree = () => {
  const [counterOne, setcounterOne] = useState(0)
  const [counterTwo, setcounterTwo] = useState(0)

  const incrementOne = () => {
    setcounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setcounterTwo(counterTwo + 1)
  }

  const inEven = useMemo(() => {
      let i = 0;
      while (i < 2000000000) i++
      return counterOne % 2 === 0
    },
    [counterOne]
  )

  return (
    <div>
      <div>
        <button onClick={incrementOne}>{counterOne}</button>
        <span>{ inEven ? 'Even' : 'Odd' }</span>
      </div>

      <div>
        <button onClick={incrementTwo}>{counterTwo}</button>
      </div>
    </div>
  );
};

export default CounterThree
