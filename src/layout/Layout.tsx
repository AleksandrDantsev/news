import React, { Fragment } from "react";
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header";
import st from "./Laoyut.module.scss";

const Layout:React.FC = () => {
    return(
        <Fragment>
            <Header />
            <div className={st.wrapper}>
                <main>
                    <Outlet />
                </main>
            </div>
        </Fragment>
    );
}


export default Layout;