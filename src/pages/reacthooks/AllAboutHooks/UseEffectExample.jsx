import { useState, useEffect, useCallback, useMemo } from 'react';

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

    // const [test1, setTest1] = useState(true);
    // const [test2, setTest2] = useState(true);

    // // make function definition inside useEffect run if only dependency array of
    // // data state change
    // useEffect(() => {
    //   const myFunc = () => {
    //     console.log('effect of '+test1);
    //   }
    //   myFunc();
    // }, [test1]);

    // const [test1, setTest1] = useState(true);
    // const [test2, setTest2] = useState(true);

    // const myFunc = () => {
    //   console.log('effect of ' + test1);
    // };

    // useEffect(() => {
    //   myFunc();
    //   // dependency array set to test1, so it expected myFunc run when test1 value
    //   // had changed, but when adding myFunc in to dependency array, if other value
    //   // had changed, myFunc fired too, because programs runs from top to bottom as
    //   // usual, and function will be initialized as new instance, so exclude myFunc
    //   // from dependency array
    //   // }, [test1, myFunc]);
    //   // sometime this code give warning caused by react don't know what myFunc doing
    //   // because no myFunc in dependency array, so solved by use useCallback below
    // }, [test1]);

    /*
      useCallback: takes some callback, and give back memoize version of function,
      it means store that function make sure persist throught out re-render, and
      only time give of new function / re-iniliaze based on array dependency passed
      as second Argument
    */

    // const myFunc = useCallback(() => {
    //   //  otherwise useCallback will tell react for myFunc had initialize
    //   //  except value of dependency array has updated(test1)
    //   console.log('effect of ' + test1);
    //   // this dependency array means: every test 1 has change,
    //   // re-iniliaze myFunc instance & update it definition
    // }, [test1]);

    // useEffect(() => {
    //   myFunc();
    //   // myFunc as dependency array, it runs depend on useCallback above,
    //   // then useCallback dependency array is test1 value's switching
    // }, [myFunc]);

    /*
      useMemo: if useCallback memoize function, useMemo memoize object
    */

    const [test1, setTest1] = useState(true);
    const [test2, setTest2] = useState(true);

    // const myObj = {
    //   a: 'my value of a ' + test1
    // }

    // useEffect(() => {
    //   // it same like function previously, as program flow every render, it will
    //   // run from top to bottom, and definition of object will re-inialize
    //   // so object need to memoize, then useEffect run when myObj has changed
    //   console.log(myObj.a);
    // }, []);


    const myObj = useMemo(() => ({
      a: 'my value of a ' + test1,
      // dependency array of use memo make trigger of useEffect below,
      // so when test1 has changed, useEffect will triggered
    }), [test1]);

    useEffect(() => {
      console.log(myObj.a);
      // myObject as dependency array of useEffect
    }, [myObj]);

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