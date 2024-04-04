import React, { Fragment } from "react";
import { Outlet } from "react-router-dom"


const Layout:React.FC = () => {
    return(
        <Fragment>
            <div>n,nm,yuy</div>
            <main>
                <Outlet />
            </main>
        </Fragment>
    );
}


export default Layout;