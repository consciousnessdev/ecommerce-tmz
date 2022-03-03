import { useState, useCallback, useMemo } from "react";
import './ReactHooks.css';

const UseCallBackApp = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementCount1 = useCallback(() => setCount1(count1 + 1),[count1]);
    const incrementCount2 = useCallback(() => setCount2(count2 + 1),[count2]);

    // previous doSomethingComplicated declaration value,
    // without useMemo it will call every component has rendered
    // const doSomethingComplicated = () => {
    //   console.log('I am computing something complex');
    //   return ((count1 * 1000) % 12.4) * 51000 - 4000;
    // };

    // useMemo for memoize
    const doSomethingComplicated = useMemo(() => {
      console.log('I am computing something complex');
      return ((count1 * 1000) % 12.4) * 51000 - 4000;
      // recompute if count1 has change
    }, [count1]);

    return (
      <div className="ReactHooks">
        <header className="App-header">
          <div>Count1: {count1}</div>
          <button onClick={incrementCount1}>Increase Count1</button>
          <div>Count2: {count2}</div>
          <button onClick={incrementCount2}>Increase Count2</button>
          {/*
            doSomethingComplicated is function contain return value
            so it must called as function
           */}
          {/* <div>complex value: {doSomethingComplicated()}</div> */}
          {/* doSomethingComplicated change into value */}
          <div>complex value: {doSomethingComplicated}</div>
        </header>
      </div>
    );
}

export default UseCallBackApp;