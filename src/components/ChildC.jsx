import React, { useContext } from "react";
import { data, data1 } from "../Hooks/MyUseContext";
// 👇 ContextAPI wala
// const ChildC = () => {
//   return (
//     <data.Consumer>
//       {(name) => {
//         return <h1>My name is {name}</h1>;
//       }}
//     </data.Consumer>
//   );
// };
// export default ChildC;

// 👇 useContext wala
const ChildC = () => {
    const fName = useContext(data);
    const age = useContext(data1);
  return (
    <h1>{fName} {age}</h1>
   
  );
};

export default ChildC;
