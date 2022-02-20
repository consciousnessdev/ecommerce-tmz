import { useLayoutEffect, useEffect, useRef } from 'react';

import './useEffectLayoutStyles.css';

const UseLayoutEffectExample = () => {
  // useRef: 'Ref' means reference, below definition is
  // set ourDiv as reference method within component
  
  const ourDiv = useRef();
  // note: reference handle any mutable value, such as
  // string, object, node, boolean etc

  useEffect(() => {
    console.log('useEffect');
    // check ourDiv reference
    // console.log(ourDiv.current)
    // it show (literally) DOM Node

    // previously background color styled by id selector
    // then set ourDiv reference background color style to red
    // but all this changes happen when DOM has painted
    // ourDiv.current.style.backgroundColor = 'red';
  }, [ourDiv]);

  // useLayoutEffect run before DOM painted
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    // useLayoutEffect painted DOM before component rendered
    ourDiv.current.style.backgroundColor = 'red';
  }, [ourDiv]);

  return (
    // set ourDiv reference by passing into ref={ourDiv} 
    <div id="my-div" ref={ourDiv}>
      useLayoutEffect vs useEffect
    </div>
  );
};

export default UseLayoutEffectExample;