import React from 'react'
import useCount from './UseCount'

const CounterA = () => {
    const [count, increment, decrement] = useCount()
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default CounterA