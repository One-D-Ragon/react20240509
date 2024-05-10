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
  // b는 a가 가리키고 있는 객체의 name, age, address 프로퍼티만 복사해옴
  const { ...b } = a;
  b.age = 55;
  console.log("b.age", b.age); // 55
  console.log("a.age", a.age); // 44

  console.log("a.address.city", a.address.city); // seoul
  console.log("b.address.city", b.address.city); // seoul

  b.address.city = "busan";
  // b는 a가 가리키고 있는 객체의 name, age, address 프로퍼티만 복사해옴
  // 따라서 b와 a의 address 객체는 같은 street와 city 프로퍼티를 참조
  // a가 가지고 있는 address 객체의 참조값이 b에 복사됨(street와 city는 복사되지 않음)
  console.log("a.address.city", a.address.city); // seoul
  console.log("b.address.city", b.address.city); // seoul

  // 깊은 복사 (deep copy)
  // 얕은 복사를 여러번 해서 해결
  const { ...c } = a; // 얕은 복사
  const { ...address1 } = a.address; // 얕은 복사
  c.address = address1; // 깊은 복사
  c.address.city = "london";
  console.log("a.address.city", a.address.city); // busan
  console.log("c.address.city", c.address.city); // london

  return <div></div>;
}

export default App;
