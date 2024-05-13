import React, { useState } from "react";

function MyComp() {
  const [val, setVal] = useState({ name: "son" });

  function updateVal() {
    // 상태가 바뀌면 다시 그림
    // 실제값은 바뀌었지만 참조값은 바뀌지 않았다
    // 새 객체를 만들어서 set
    val.name = "lee";
    setVal(val);
  }

  return (
    <div>
      {val.name}
      <button onClick={updateVal}>click</button>
    </div>
  );
}

function MyComp2() {
  const [val, setVal] = useState({ name: "son" });
  function updateVal() {
    // 객체를 복사해서 새 객체를 만들어 써야함
    const { ...newVal } = val; // 얕은 복사
    newVal.name = "lee";
    setVal(newVal);
  }
  return (
    <div>
      {val.name}
      <button onClick={updateVal}>변경</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

export default App;
