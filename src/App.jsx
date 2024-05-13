import React from "react";
// import : 다른 파일에 있는 변수를 현재 파일에서 사용
// import {변수명} from "파일의 위치(보통 상대경로로 쓴다)";
// .(현재 파일의 위치)
// 중괄호 안에 콤마를 사용해서 같은 파일의 변수를 추가할 수 있다
// 다른 파일의 같은 변수를 import 할 때 as로 다른 별칭을 줄 수 있음 (충돌을 피할 수 있다)
import { value1, value2, value3 as v3, value4 } from "./MyValues.jsx";
import { myAddress, myStr, value3 as vv3 } from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      <div>value1 : {value1}</div>
      <div>value2 : {value2}</div>
      <div>vv3 : {vv3}</div>
      <div>v3 : {v3}</div>
      <div>value4 : {value4.team}</div>
      <div>myStr : {myStr}</div>
      <div>myAddress : {myAddress}</div>
    </div>
  );
}

export default App;
