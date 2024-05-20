import React from "react";

function App(props) {
  const names = ["January", "February", "March", "April"];
  // <li>January</li>
  // <li>February</li>
  // <li>March</li>
  // <li>April</li>
  // names.map((name) => <li>{name}</li>); => 위의 리스트를 만들어줌
  // 배열을 map 메소드 사용해서 컴포넌트들을 만들 때
  // key prop을 사용해서 효율성을 높일 것
  // key prop에 값은 주로 primary key가 사용됨

  return (
    <div>
      <ul>
        {/* 리렌더링이 일어날 때 기존 컴포넌트의 키와 새로 만들어진 컴포넌트의 키가
         같고 내용물이 안바뀌었으면 업데이트하지 않는다 */}
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
