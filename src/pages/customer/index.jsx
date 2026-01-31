// rafce リアクトの雛形が作れるショートカットです🤗

import React from "react";
// cssを紐づける
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import CustomerList from "../../components/CustomerList";


const Customer = () => {
    return (
        <>
            <Header />
            <div className={styles.customer}>
                {/*  */}
                <SideBar />
                <CustomerList />
                {/*  */}
            </div>
        </>
    );
};

export default Customer;