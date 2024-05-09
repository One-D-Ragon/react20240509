function App() {
  // &&, ||

  // falsy(false 같은)
  // : false, 0, "", null, undefined

  const a = "undefined";

  // 자바스크립트에서는 a 자리에 뭐든지 올 수 있다 (타입을 중요하게 생각하지 않음)
  if (a) {
    console.log("a는 참이다");
  } else {
    console.log("a는 거짓이다");
  }

  // truthy(true 같은) : falsy 가 아니면 truthy

  // &&, || 와 조합

  let b = 0;
  let c = b && "값이 있음";
  console.log("c", c); // 0

  let d = b || "값이 없음";
  console.log("d", d); // "값이 없음"

  return <div></div>;
}

export default App;
