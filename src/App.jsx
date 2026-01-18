import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      {/*  */}
      <div>
        <p>名前が入ります</p>
        <input type="text" placeholder="名前を入力してください" />
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input type="text" placeholder="メールアドレスを入力してください" />
      </div>
      {/*  */}
    </>
  );
}

export default App;