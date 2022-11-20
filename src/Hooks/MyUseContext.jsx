import React, { createContext } from 'react'
import ChildA from '../components/ChildA';

const data = createContext();
const data1 = createContext();
const MyUseContext = () => {
    const name = 'Ashwani';
    const age = 24;
  return (
    <data.Provider value={name}>
        <data1.Provider value={age}>
            <ChildA />
        </data1.Provider>
    </data.Provider>
    
  )
}

export default MyUseContext
export {data, data1}