import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <input type="number" name="amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(amount)}>Set Count</button>
    </div>
  );
};

export default Counter
