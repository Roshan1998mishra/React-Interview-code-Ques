import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0);


    const add = () => {
       setCount(count+1);
    }
    const sub = () => {
        setCount(count-1);
    }

  return (
    <>
    <h1>Counter App </h1>
    <p>Result :{count}</p>
    <button onClick={add}>Increment</button>
    <button onClick={sub}>Decrement</button>

    </>
  )
}
export default Counter;

