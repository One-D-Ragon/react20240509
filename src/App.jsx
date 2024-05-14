import React, { createContext, useContext, useState } from "react";

// step1 : create context
const MessageContext = createContext("");

function MyBox() {
  // step2 : use the context
  // prop drilling이 일어난 코드를 지운다
  const message = useContext(MessageContext);
  return <div>{message}</div>;
}

function MySection() {
  return <MyBox />;
}

function MyContainer() {
  return <MySection />;
}

// context : prop drilling 없이 값을 전달하는 방법
// https://react.dev/learn/passing-data-deeply-with-context
function App(props) {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <p>{message}</p>
      <hr />
      {/* step3 : provide the context */}
      <MessageContext.Provider value={message}>
        <MyContainer />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
