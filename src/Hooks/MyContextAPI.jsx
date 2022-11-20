import React, { createContext } from "react";
import ChildA from "../components/ChildA";

const data = createContext(); // create
const MyContextAPI = () => {
  const name = "Ashwani";
  return (
    <data.Provider value={name}>
      <ChildA  />
    </data.Provider>
  );
};

export default MyContextAPI;
export {data}