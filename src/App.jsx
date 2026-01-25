import { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Chart from "./pages/chart";
import CustomerList from "./pages/customer";
import NotFound from "./pages/notfound";

function App() {
    // inputが2個あるので、入力したものを保持するためにuseStateが2ついります
    const [name, setName] = useState("名前入力");
    const [email, setEmail] = useState("メールアドレス入力");
    const [morita, setMorita] = useState(false);

    // 今からやること、useStateを追加します！これはapiのデータを受け取るので配列がいります
    const [data, setData] = useState([]);

    // イベント処理→クリックしたらXXXする、マウスを動かしたら5XXYする、マウスが離れたら5XXXする
    const handleNameChange = (e) => {
        // フォームで値を取得
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    useEffect(() => {
        // この中に書きます
        console.log("起動しました！！！！");

        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                console.log(response, "response");
                //ここでjsの形に変換するjson()を行なっています🤗
                const data = await response.json();
                console.log(data, "中身");
                // 取得したjsの形のデータをuseStateの更新の処理で上書きする
                setData(data);
            } catch (error) { }

            // おまじないの処理の終わり、下は消さない
        };

        // fetchDataを以下で動かします
        fetchData();

        //スプレッドシートAPIを記述を書いて、データを読み込む→読み込みができたら画面に表示する
        // この下は消さない
    }, []);

    return (
        <>
            {/*  */}
            {/* <h1>データを表示する方法</h1>
            {data.map((item) => (
                <div>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                    <p>{item.userId}</p>
                </div>
            ))}
//AIzaSyBknkfpSscMHXf54Q9dtwru4228cBCmSKY */}
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chart" element={<Chart />} />
                    <Route path="/customer" element={<CustomerList />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            {/*  */}
        </>
    );
}

export default App;