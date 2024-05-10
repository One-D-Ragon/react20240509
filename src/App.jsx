import React from "react";

function App(props) {
  // 이름있는 함수
  function action1() {
    console.log("Action 1");
  }
  action1(); // 함수 실행
  action1; // 함수 자체(이름)

  // 이름없는 함수
  const action2 = function () {
    console.log("anonymous action");
  };

  // arrow function
  const action3 = () => console.log("anonymous action $$$$$");

  return (
    <div>
      {/* onClick에 함수를 준다 */}
      <button onClick={action1}>클릭!</button>
      <button onClick={action2}>클릭@</button>
      {/* 이름없는 함수를 바로 넣을 수 있다 */}
      <button
        onClick={function () {
          console.log("anonymous action #####");
        }}
      >
        클릭#
      </button>
      <button onClick={action3}>클릭$</button>
      <button onClick={() => console.log("arrow function %%%")}>클릭%</button>
    </div>
  );
}

export default App;
