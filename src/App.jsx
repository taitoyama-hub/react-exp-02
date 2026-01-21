import { useState, useEffect } from "react";
import "./App.css";
import News from "./components/News";
import SideBar from "./layout/SideBar";
import Header from "./layout/Header";
import ChartBar from "./components/ChartBar";
import CalenderItem from "./components/CalenderItem";


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
        console.log("名前が変更されました");
    }, [])


    console.log("起動しました");

    return (
        <>
            <Header />
            <SideBar />
            <News />
            <ChartBar />
            <CalenderItem />
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
        </>
    );
}

export default App;