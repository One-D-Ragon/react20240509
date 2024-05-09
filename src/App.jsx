import React from "react";

function App(props) {
  // object
  const a = {
    name: "John",
  };

  const b = a;
  console.log(a === b); // true

  console.log("a.name", a.name); // John
  console.log("b.name", b.name); // John

  b.name = "Jane"; // 객체는 참조값을 저장한다
  console.log(a === b); // true

  console.log("a.name", a.name); // Jane
  console.log("b.name", b.name); // Jane

  return <div></div>;
}

export default App;
