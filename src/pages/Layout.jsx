import { Outlet } from "react-router";
import ScrollToTop from "../components/ScorllToTop/ScrollToTop";
import Navbar  from "../components/Navbar/Navbar";
import Footer  from "../components/Footer/Footer";
import { useLocation } from "react-router";

export const Layout = () =>{
    const location = useLocation()
    return(
        <ScrollToTop location={location}>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </ScrollToTop>
    )
}