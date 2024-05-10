import React from "react";

function MyComp(props) {
  console.log(props);
  return (
    <div>
      <p>name : {props.name}</p>
      <p>age : {props.age}</p>
      <p>address : {props.address}</p>
      <p>city : {props.city}</p>
      <p>country : {props.country}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp name="son" age={33} address="seoul" />{" "}
      {/* name, age, address 프로퍼티가 있는 객체가 만들어짐 */}
      <MyComp city="busan" country="USA" />{" "}
      {/* city,country 프로퍼티가 있는 객체가 만들어짐 */}
    </div>
  );
}

export default App;
