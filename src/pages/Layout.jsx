import { Outlet } from 'react-router';
import ScrollToTop from '../components/ScorllToTop/ScrollToTop';
import Navbar from '../shared/components/navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router';
import { Sidebar } from '../shared/components/sidebar/Sidebar.jsx';
import { useHealthCheck } from '../shared/hooks/useHealthCheck.jsx';
import { useFetchUser } from '../shared/hooks/useFetchUser.jsx';

export const Layout = () => {
  const location = useLocation();

  // const [error, setError] = useState(null);

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
