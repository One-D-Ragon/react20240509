import React, { useState } from "react";

function MyButton({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>UP {count}</button>
    </div>
  );
}

// MyButton의 count를 MyBox에 전달하고 싶다면
// 연결고리가 없기 때문에 부모를 통해서 전달해줘야 한다
// 따라서 lifting state up으로 상위 컴포넌트에 상태를 작성한다
function MyBox({ count }) {
  return <div>{count}번 클릭됨</div>;
}

function App(props) {
  const [count, setCount] = useState(0);

  function handleUpdateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <MyButton count={count} onClick={handleUpdateCount} />

      <hr />

      <MyBox count={count} />
    </div>
  );
}

export default App;
