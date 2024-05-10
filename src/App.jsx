import React from "react";

function App(props) {
  // destructuring assignment
  const person = {
    name: "John",
    email: "john@example.com",
    address: "127.0.0.1",
  };
  const { name, email } = person;
  console.log("name", name);
  console.log("email", email);
  // console.log("address", address); // 할당되지 않아서 오류가 발생

  const car = {
    model: "genesis",
    company: "hyundai",
    price: 500,
  };
  const { model, company, color } = car; // 필요한 것만 받을 수 있다. color는 없기 떄문에 undefined
  console.log("model", model);
  console.log("company", company);
  console.log("color", color);

  const house = {
    city: "seoul",
    country: "us",
  };
  // 없으면 기본값 할당
  const { city, country = "korea", area = 987 } = house;
  console.log("city", city);
  console.log("country", country); // us (값이 있기 때문에 콘솔에 korea가 아니라 us가 출력됨)
  console.log("area", area); // 987

  return <div></div>;
}

export default App;
