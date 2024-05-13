import React, { useState } from "react";

function MyComp() {
  const [val1, setVal1] = useState(0);
  // 상태가 바뀔때 다시 그린다 = 함수를 다시 호출한다

  let val2 = 0;

  function updateVal1() {
    setVal1(val1 + 1); // 상태를 업데이트
  }

  function updateVal2() {
    val2++; // 변수를 업데이트
  }

  console.log("다시 호출됨");

  return (
    <div>
      <button onClick={updateVal1}>val1 {val1}</button>
      <button onClick={updateVal2}>val2 {val2}</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
