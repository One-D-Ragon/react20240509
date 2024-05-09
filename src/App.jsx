function App() {
  // javascript review

  // javascript data type
  let a; // 값이 할당되지 않으면 undefined
  console.log("a", typeof a);
  let b = "문자열 타입"; // string
  console.log("b", typeof b);
  let c = 3; // number
  console.log("c", typeof c);
  let d = 3.14; // number
  console.log("d", typeof d);
  let e = true; // boolean
  console.log("e", typeof e);
  // typeof 연산자 : 타입을 알 수 있음

  let f = {}; // object
  // 중괄호 안에 프로퍼티와 프로퍼티 값을 넣을 수 있다
  console.log("f", typeof f);

  let g = function () {}; // function
  console.log("g", typeof g);
  g = {};
  console.log("g", typeof g); // 자바스크립트에서는 값이 들어갈때 변수의 타입이 결정된다

  return <div></div>;
}

export default App;
