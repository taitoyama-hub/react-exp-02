import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const SHEET_NAME = "test";
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_SHEET_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;

const CustomerList = () => {
    // 1.スプレッドシートAPIのデータを保持したい
    const [data, setData] = useState([]);
    // 2.useEffectを使ってスプレッドシートAPIのデータを取得したい
    useEffect(() => {
        // この中に書きます

        const fetchData = async () => {
            //スプレッドシートを作成し、その次に共有を押して、リンクを知っている人に設定をする🤗
            // 例) https://docs.google.com/spreadsheets/d/xxxx（授業で説明しますがここがシートIDです！これを使います！）/edit?usp=sharing

            // https://docs.google.com/spreadsheets/d/1gpjxy6LNKsn3jxusZ96RKA3SoHZtLQ7v_yeDGSbp27k/edit?usp=sharing

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
            const res = await fetch(url);
            const json = await res.json();
            console.log(json, "スプレッドシートAPIのデータ");

            //jsの処理を使って画面に表示するデータを整形
            if (json.values) {
                const mapped = json.values
                    .filter((row) => row[0] && !Number.isNaN(Number(row[0])))
                    .map((row, index) => ({
                        id: Number(row[0]),
                        title: row[1],
                        date: row[2],
                        tel: row[3],
                        name: row[4],
                    }));
                setData(mapped);
            }
        };

        fetchData();
    }, []);

    console.log(data, "useState");

    return (
        <>
            <div className={styles.chartBar}>
                {/* useStateの中に収納したAPIのデータを表示します🤗 */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">id</TableCell>
                                <TableCell align="right">エリア</TableCell>
                                <TableCell align="right">登録日</TableCell>
                                <TableCell align="right">電話番号</TableCell>
                                <TableCell align="right">名前</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell align="right">{row.id}</TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right">{row.tel}</TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};

export default CustomerList;
