import { Outlet, useNavigate } from 'react-router';
import ScrollToTop from '../components/ScorllToTop/ScrollToTop';
import Navbar from '../shared/components/navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer.js';
import { getHealthy, getUser } from '../services/apiBackend.js';
import { Sidebar } from '../shared/components/sidebar/Sidebar.jsx';

const excludes = ['/'];

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const showNavbar = !excludes.includes(location.pathname);

  const { dispatch } = useGlobalReducer();
  // const [error, setError] = useState(null);

  useEffect(() => {
    const health = async () => {
      try {
        const isConnect = await getHealthy();
        dispatch({ type: 'set_api_connect', payload: isConnect });
      } catch {
        dispatch({ type: 'set_api_connect', payload: false });
      }
    };
    health();
    const interval = setInterval(health, 3000);
    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    if (excludes.includes(location.pathname)) return;
    if (!localStorage.getItem('token')) {
      navigate('/');
      return;
    }
    getUser().then((data) => {
      if (!data || data.error) {
        localStorage.removeItem('token');
        navigate('/');
        return;
      }
      dispatch({ type: 'set_user', payload: data });
    });
  }, [dispatch, navigate, location.pathname]);

  return (
    <ScrollToTop location={location}>
      {showNavbar && <Navbar />}
      <div
        className={`${showNavbar ? 'flex h-[calc(100vh-100px)]' : 'h-screen'}`}
      >
        {showNavbar && (
          <div className=" overflow-hidden">
            <Sidebar />
          </div>
        )}
        <div className="overflow-y-auto w-full">
          <Outlet />
        </div>
      </div>
      {showNavbar && <Footer />}
    </ScrollToTop>
  );
};
