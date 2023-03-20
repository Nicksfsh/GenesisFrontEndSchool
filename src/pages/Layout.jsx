import Header from "../components/Header";
import Footer from "../components/Footer";
import {Routes, Route, Outlet, Link} from "react-router-dom";

function Layout() {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout