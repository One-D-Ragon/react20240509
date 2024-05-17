import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function SpringRoot() {
  return (
    <div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#eee",
          display: "flex",
          gap: "5px",
        }}
      >
        {/*<div>
          <a href="/spring/learn">LEARN</a>
        </div>
        <div>
          <a href="/spring/api">API</a>
        </div>
        <div>
          <a href="/spring/doc">DOC</a>
        </div>*/}

        <div>
          <Link to={"/spring"}>HOME</Link>
        </div>
        <div>
          {/* a 태그 대신 Link 컴포넌트 사용하기 */}
          <Link to="/spring/learn">LEARN</Link>
          {/* react-router-dom의 Link 컴포넌트를 사용 */}
        </div>
        <div>
          <Link to="/spring/api">API</Link>
        </div>
        <div>
          <Link to="/spring/doc">DOC</Link>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "spring",
    element: <SpringRoot />,
    children: [
      { index: true, element: <div>spring main page</div> },
      /* index 값을 주면 상위 경로로 끝났을 때 outlet으로 나오는 컴포넌트를 정의할 수 있다*/
      { path: "api", element: <div>api page</div> },
      { path: "doc", element: <div>doc page</div> },
      { path: "learn", element: <div>learn page</div> },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
