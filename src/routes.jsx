import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';
import { Layout } from './pages/Layout';
import Home from './pages/Home/Home';
import { Signin } from './pages/Signin';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not Found!</h1>}>
      <Route index element={<Signin />} />
      <Route path="/home" element={<Home />} />
    </Route>
  )
);
