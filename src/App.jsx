// built-in component : html 의 기본 요소, 소문자로 시작
// component : 직접만든 요소(태그), 대문자로 시작

// component 는 return을 가진 함수
function MyComponent() {
  // return : 화면에 출력할 코드
  return <div>hello component</div>;
  // javascripit xml (JSX) 코드 : vite에 의해서 javascript 코드로 변환이 된다 -> javascript 코드를 작성하면 된다
}

function MyComp() {
  // JSX 코드 : <div></div>
  // 어디에서든 작성할 수 있다

  const myElem = <h1>hi JSX</h1>;

  return myElem;
}

function App() {
  // 한 줄 주석
  /*
  여러 줄 주석
   */

  // component 사용시 종료 태그 생략할 수 없음
  // br 같은 빈요소는 시작태그에서 꼭 종료

  return (
    <>
      {/* 페이지 소스 보기에서 보이지 않음. 검사의 Elements 에서 볼 수 있음
          main.jsx 파일의 createRoot 코드의 getElementId를 통해서 렌더링되어서 볼 수 있다 */}
      <div>
        {/* jsx 내에서의 주석 */}
        {/* 단축키 : ctrl + / */}
        <h1>
          hello
          <br />
          react
        </h1>
        <h2>하이 리액트</h2>
        <h3>안녕 리액트</h3>
        <p>Lorem ipsum dolor.</p>
        <MyComponent /> {/* return 에 작성한 값이 그대로 온다 */}
        <MyComp />
      </div>
    </>
  );
}

export default App;
