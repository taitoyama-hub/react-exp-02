import { useState, useEffect } from "react";
// カスタムフックはuseXxxxという命名をつけることが慣習的に決まっています🤗

export const useForm = () => {
    // この↓に他のファイルの記述をお引越ししたものを貼り付ける
    // inputが２個あるので、入力したものを保持するためにuseStateが２ついります🤗
    const [name, setName] = useState("名前入力");
    const [email, setEmail] = useState("メールアドレス入力");
    const [morita, setMorita] = useState(false);
    // 今かやること、useStateを追加します！これはapiのデータを受け取るためです🤗絶対にいります！！
    const [data, setData] = useState([]);

    // イベント処理=クリックしたらXXXする,マウスを動かしたらXXXする、マウスが離れたらxxxx,.....
    const handleNameChange = (e) => {
        // 処理を書きます🤗
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        // 処理を書きます🤗
        setEmail(e.target.value);
    };

    useEffect(() => {
        // この中に書きます🤗
        console.log("起動しました！！！！！！");

        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/todos",
                );
                console.log(response, "response");
                //ここでjsの形に変換するjson()を行なっています🤗
                const data = await response.json();
                console.log(data, "中身");
                // 取得したjsの形のデータをuseStateの更新の処理で上書きする
                setData(data);
            } catch (error) { }

            // おまじないの処理の終わり、下は消さない
        };

        // fetchDataを以下で動かします🤗
        fetchData();

        //スプレッドシートAPIを記述を書いて、データを読み込む→読み込みができたら画面に表示する
        // この下は消さない
    }, []);

    // useEffectの前に追加でコンソールログを以下に書きます↓
    console.log("順番の確認🤗");
    //

    // ここがポイント！以下でreturnというものを使い、他のファイルで呼び出せるようにする記述方法です🤗
    return {
        // この中に各reactのおまじないや、jsのおまじないを記述する🤗
        handleNameChange,
        handleEmailChange,
        name,
        email,
        data,
    };

    // この下は消さない
};