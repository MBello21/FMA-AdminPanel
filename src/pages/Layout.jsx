import { Outlet } from 'react-router';
import { useLocation } from 'react-router';
import ScrollToTop from '../components/ui/ScrollToTop.jsx';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/ui/Footer.jsx';
import { Sidebar } from '../components/layout/Sidebar.jsx';
import { useHealthCheck } from '../hooks/useHealthCheck.jsx';
import { useFetchUser } from '../hooks/useFetchUser.jsx';

export const Layout = () => {
    const location = useLocation();

    useHealthCheck();
    useFetchUser();

    return (
        <ScrollToTop location={location}>
            <Navbar />
            <div className="flex h-[calc(100vh-75px)]">
                <div className=" overflow-hidden w-72">
                    <Sidebar />
                </div>
                <div className="overflow-y-auto w-[calc(100%-288px)]">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </ScrollToTop>
    );
};
