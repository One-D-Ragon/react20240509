import React, { useState } from "react";

function MyBox({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>UP</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [display, setDisplay] = useState(true);
  const [count, setCount] = useState(0);

  // lift state up : 상위 컴포넌트에 하위 컴포넌트의 상태를 올린다
  // 하위 컴포넌트의 상태 유지가 가능하다
  // props, setCount

  return (
    <div>
      <input
        type="checkbox"
        checked={display}
        onChange={(e) => setDisplay(e.target.checked)}
      />
      {display && <MyBox count={count} setCount={setCount} />}
    </div>
  );
}

export default App;
