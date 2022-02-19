import { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [test1, setTest1] = useState(true);

  // note: useEffect run after render, in this code means after returned
  // jsx code below rendered
  // useEffect(() => {
  //   console.log('effect run');
  // },[]);

  // try detect run render first
  // console.log('render');

  const consoleMessage = () => {
    console.log('effect run');
  }

  useEffect(() => {
    consoleMessage();
    // function as useEffect array dependencies will check is consoleMessage
    // is difference function as previous
  }, [consoleMessage]);


  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
    </div>
  );
};

export default UseEffectExample;