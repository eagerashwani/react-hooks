import React, { useRef, useState } from "react";

const MyUseRef = () => {
  const refElement = useRef();
  console.log(refElement);
  const [name, setName] = useState("Ashwani");
  function Reset() {
    setName("");
    refElement.current.focus();
  }

  function handleInput() {
    refElement.current.style.color = "red";
    refElement.current.value = 'Elon Musk';
  }

  return (
    <>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>Handle Input</button>
    </>
  );
};

export default MyUseRef;
