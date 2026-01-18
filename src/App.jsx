import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  useEffect(() => {

  }, [])

  return (
    <>
      {/*  */}
      <div>
        <p>名前が入ります</p>
        <input
          type="text"
          placeholder="名前を入力してください"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input
          type="text"
          placeholder="メールアドレスを入力してください"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {/*  */}
    </>
  );
}

export default App;