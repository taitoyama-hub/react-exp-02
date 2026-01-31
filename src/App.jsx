
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Chart from "./pages/chart";
import CustomerList from "./pages/customer";
import NotFound from "./pages/notfound";
import Orders from "./pages/orders";
import { useForm } from "./hooks/useForm";

function App() {


    const {
        handleEmailChange,
        handleNameChange,
        name,
        email,
        data
    } = useForm();

    // おまじないの処理の終わり、下は消さない


    //スプレッドシートAPIを記述を書いて、データを読み込む→読み込みができたら画面に表示する
    // この下は消さない

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
*/}
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chart" element={<Chart />} />
                    <Route path="/customer" element={<CustomerList />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </Router>
            {/*  */}
        </>
    );
}

export default App;