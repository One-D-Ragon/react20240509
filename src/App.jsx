import React, { useState } from "react";

function MyComp({ color }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: `5px solid ${color}` }}>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>UP</button>
      </div>
    </div>
  );
}

function App(props) {
  const [view1, setView1] = useState(true);
  const [view2, setView2] = useState(true);

  return (
    /*리액트를 컴포넌트를 트리로 관리한다*/
    /* initial render : 없어졌다가 나타나는 것. 상태가 0인 초기 상태에서 다시 시작하게 된다*/
    <div>
      <input
        type={"checkbox"}
        checked={view1}
        onChange={(e) => setView1(e.target.checked)}
      />
      {view1 && <MyComp color={"blue"} />}
      <hr />
      <input
        type={"checkbox"}
        checked={view2}
        onChange={(e) => setView2(e.target.checked)}
      />
      {view2 && <MyComp color={"red"} />}
    </div>
  );
}

export default App;
