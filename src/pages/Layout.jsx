import { Outlet } from 'react-router';
import ScrollToTop from '../components/ScorllToTop/ScrollToTop';
import Navbar from '../shared/components/Navbar.jsx';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router';

export const Layout = () => {
  const location = useLocation();
  return (
    <ScrollToTop location={location}>
      <div className="flex min-h-full w-full">
        <Navbar className="w-3xs" />
        <div className="min-h-full w-full">
          <Outlet />
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
};
