import React, {useState} from 'react'

const useCount = (intialValue = 0, byCount = 1) => {
    const [count, setCount] = useState(intialValue);

    const increment = () => {
        setCount(count + byCount);
    }

    const decrement = () => {
        setCount(count - byCount);
    }

    return [count, increment, decrement];

}

export default useCount