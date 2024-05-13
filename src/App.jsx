import React, { useState } from "react";

function MyComp1() {
  const [val, setVal] = useState(0);

  function updateVal() {
    // react는 re render 시점을 적절한 순간으로 선택함(리액트가 알아서 한다)
    setVal(val + 1);
    setVal(val + 1);
    setVal(val + 1); // react는 상태를 update 하자마자 바로 올리는게 아니라 기다렸다가 필요한 순간에 다시 그린다. 상태를 변경할 때마다 다시 그리는게 아니다
    console.log("val", val); // 예전 val이 출력된다
  }

  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={updateVal}>증가</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App;
