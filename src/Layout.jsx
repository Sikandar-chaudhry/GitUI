import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import News from "./components/News/News.jsx";

export default function Layout(){
    return(
        <>
            <News />
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}