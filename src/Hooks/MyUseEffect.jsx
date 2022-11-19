import React, {useState, useEffect} from 'react'

const MyUseEffect = () => {
    const [data, setData] = useState("ram");
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("component mounted");
    },[data])

    const handleData = () => {
        setData(data==="ram" ? "shyam" : "ram");
    }

    const handleClick = () => {
        setCount(count+1);
    }
  return (
    <>
        <h1>No of times count {count}, Data is {data} </h1>
        <button onClick={handleData}>Change Data</button>
        <button onClick={handleClick}>Click me</button>
    </>
    
  )
}

export default MyUseEffect