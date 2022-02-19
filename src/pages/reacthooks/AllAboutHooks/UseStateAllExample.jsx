import { useState } from 'react';

export const UseStateExample1 = () => {
  const [test1, setTest1] = useState(true); // false

  return (
    <div>
      {/* test1 in h1 component referenced to useState value */}
      <h1>test1 value: {String(test1)}</h1>
      {/* onClick button setTest1 set state to inverse of current test1 value */}
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
    </div>
  );
};

export const UseStateExample2 = () => {
  const [count, setCount] = useState(0);

  const handleAlert = () => {
    setTimeout(() => {
      alert(`Alert count is: ${count}`);
    }, 3000);
  };

  return (
    <div>
      <h1>Count value: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment count
      </button>

      <button onClick={handleAlert}>Alert current Count</button>
    </div>
  );
};