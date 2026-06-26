import { Outlet, useNavigate } from 'react-router';
import ScrollToTop from '../components/ScorllToTop/ScrollToTop';
import Navbar from '../shared/components/navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer.js';
import { getHealthy, getUser } from '../services/apiBackend.js';

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
  }, [dispatch]);

  useEffect(() => {
    if (excludes.includes(location.pathname)) return;
    if (localStorage.getItem('token')) {
      getUser().then((data) => dispatch({ type: 'set_user', payload: data }));
    } else {
      navigate('/');
    }
  }, [dispatch, navigate, location.pathname]);

  return (
    <ScrollToTop location={location}>
      {showNavbar && <Navbar />}
      <Outlet />
      {showNavbar && <Footer />}
    </ScrollToTop>
  );
};
