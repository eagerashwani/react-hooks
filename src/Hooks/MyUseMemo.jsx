import React, { useMemo, useState } from "react";

const MyUseMemo = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const memoMultiply = useMemo(
    function multiply() {
      console.log("#######################");
      return add * 10;
    },
    [add]
  );
  return (
    <>
      {memoMultiply},<button onClick={() => setAdd(add + 1)}>Add</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Sub</button>
      <span>{minus}</span>
      <br />
    </>
  );
};

export default MyUseMemo;
