import React from "react";

function App(props) {
  // style props

  return (
    <div>
      {/* 값이 객체여서 중괄호를 쓴다 */}
      <div
        style={{
          color: "blue",
          padding: "10px",
          border: "2px dotted green",
          textAlign: "center",
          backgroundColor: "aqua",
        }}
      >
        Lorem ipsum dolor.
      </div>
    </div>
  );
}

export default App;
