import React from "react";

function App(props) {
  return (
    <div>
      {/* file 보낼때는 post 방식과 encType을 꼭 써줘야한다*/}
      <form action="/path" method="post" encType="multipart/form-data">
        이름 <input type="text" name="name" />
        <br />
        <input type="file" name="file" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
