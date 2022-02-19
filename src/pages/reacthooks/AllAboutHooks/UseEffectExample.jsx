import { useState, useEffect } from 'react';

// const consoleMessage = () => {
//   console.log('effect run');
// }

// const consoleMessage = (message) => {
//   console.log('effect run '+message);
// };

const UseEffectExample = () => {
  // const [test1, setTest1] = useState(true);

  // note: this function no dependency data to props or state, so move 
  // to outside of functional component
  // const consoleMessage = () => {
  //   console.log('effect run');
  // }

  // useEffect(() => {
  //   consoleMessage();
  //   // depedency array is only define for data in functional component scope
  // }, []);

    // consoleMessage run outside of functional also make if useEffect more than 1
    // it run each of them
    // useEffect(() => {
    //   consoleMessage('first');
    // }, []);

    // useEffect(() => {
    //   consoleMessage('second');
    // }, []);

    const [test1, setTest1] = useState(true);
    const [test2, setTest2] = useState(true);

    // make function definition inside useEffect run if only dependency array of
    // data state change
    useEffect(() => {
      const myFunc = () => {
        console.log('effect of '+test1);
      }
      myFunc();
    }, [test1]);

  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <h1>test1 value: {String(test2)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
      <button onClick={() => setTest2(!test2)}>Flip test value</button>
    </div>
  );
};

export default UseEffectExample;