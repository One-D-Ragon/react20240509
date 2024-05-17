import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "spring",
    element: (
      <div>
        spring root page
        <Outlet />{" "}
        {/* 하위 경로에 있는 것을 보여준다. 상위 경로는 안바뀌고 하위 경로만 바뀐다 */}
      </div>
    ),
    children: [
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
