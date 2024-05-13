import React, { useState } from "react";

function MyComp() {
  const [val, setVal] = useState(0); // 초기값은 0(이전 상태)
  console.log("다시 그려짐");
  return (
    <div>
      <button onClick={() => setVal(1)}>클릭 {val}</button>
      {/* 바뀐 상태, 기존 상태와 같은 값을 가지면 다시 그려지지 않는다 */}
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
