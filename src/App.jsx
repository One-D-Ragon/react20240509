import React from "react";

function App(props) {
  const a = {
    name: "John",
    age: 44,
    address: {
      street: "Lorem Ipsum",
      city: "seoul",
    },
  };

  // 얕은 복사 (shallow copy)
  const { ...b } = a;
  b.age = 55;
  console.log("b.age", b.age); // 55
  console.log("a.age", a.age); // 44

  console.log("a.address.city", a.address.city); // seoul
  console.log("b.address.city", b.address.city); // seoul

  b.address.city = "busan";
  // a가 가지고 있는 address의 참조값이 b에 복사됨(street와 city는 복사되지 않음)
  console.log("a.address.city", a.address.city); // seoul
  console.log("b.address.city", b.address.city); // seoul

  // 깊은 복사 (deep copy)

  return <div></div>;
}

export default App;
