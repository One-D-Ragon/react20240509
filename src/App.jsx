import React, { useState } from "react";

function MyComp() {
  // 여러 상태가 있을 수 있음
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  console.log("다시 그려짐");
  return (
    <div>
      <div>{val1}</div>
      {/* 전체 다 다시 그리는게 아니라 변경된 부분만 다시 그린다 */}
      <div>
        <button onClick={() => setVal1(val1 + 1)}>click1</button>
      </div>
      <div>{val2}</div>
      <div>
        <button onClick={() => setVal2(val2 + 1)}>click2</button>
      </div>
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
