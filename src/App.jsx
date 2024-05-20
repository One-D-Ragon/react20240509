import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  // console.log("axios로 파일 전송");

  function handleSubmit(e) {
    e.preventDefault();

    // post: 경로, 데이터, cofing
    // posrForm : content 타입을 자동으로 세팅해줌 = 경로, 데이터
    axios.postForm("/api/main45/sub1", {
      name: name,
      file: file,
    });
  }

  return (
    <div>
      {/* file 보낼때는 post 방식과 encType="multipart/form-data"를 꼭 써줘야한다*/}
      <form onSubmit={handleSubmit}>
        이름{" "}
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
