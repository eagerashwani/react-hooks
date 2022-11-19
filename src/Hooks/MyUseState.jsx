import React, {useState} from 'react'

const MyUseState = () => {
    const [count, setCount] = useState(0);
    const handleClick = function(){
        setCount(count+1);
    }
  return (
    <>
        <h1>Button clicked {count} times</h1>
        <button onClick={handleClick}>click me</button>
    </>
  )
}

export default MyUseState