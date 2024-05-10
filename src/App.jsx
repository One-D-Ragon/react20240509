import React from "react";

// props : properties
// <MyButton name ="클릭3" />
// props : { name: "클릭3" } => 중괄호 안의 객체가 props에 들어감(name 프로퍼티가 들어가있음)
function MyButton(props) {
  return (
    <button
      style={{
        padding: "10px",
        backgroundColor: "green",
        color: "white",
      }}
    >
      {props.name}
    </button>
  );
}

function App(props) {
  return (
    <div>
      <button
        style={{
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        클릭1
      </button>
      <br />
      <button
        style={{
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        클릭2
      </button>
      <br />
      {/*사용하는 곳에서 프로퍼티를 넘겨줄 수 있다*/}
      <MyButton name="클릭3" />
      <br />
      <MyButton name="클릭4" />
    </div>
  );
}

export default App;
