import React from 'react'
import useCount from './UseCount'

const CounterB = () => {
    const [count, increment, decrement] = useCount(100, 10);
  return (
    <>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default CounterB