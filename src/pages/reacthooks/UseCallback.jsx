import { useState, useCallback } from "react";
import './ReactHooks.css';

const functions = new Set();

const UseCallBackApp = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementCount1 = useCallback(() => setCount1(count1 + 1),[count1]);
    const incrementCount2 = useCallback(() => setCount2(count2 + 1),[count2]);
    const logName = useCallback(() => console.log('Paman'), []);

    functions.add(incrementCount1);
    functions.add(incrementCount2);

    console.log(functions);

    return (
      <div className="ReactHooks">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          Count1: {count1}
          <button onClick={incrementCount1}>Increase Count1</button>
          Count2: {count2}
          <button onClick={incrementCount2}>Increase Count2</button>
          {/* complexValue: {doSomethingComplicated} */}
        </header>
      </div>
    );
}

export default UseCallBackApp;