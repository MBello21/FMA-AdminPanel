import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router';
import { Layout } from './pages/Layout';

import { Signin } from './pages/Signin';
import Temperatura from './pages/Home/temperatura/Temperatura';
import Viento from './pages/Home/viento/Viento';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Signin />} errorElement={<h1>Not Found!</h1>} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<Navigate to="temperatura" />} />
        <Route path="temperatura" element={<Temperatura />}>
          <Route path=":cat" element={<Temperatura />} />
        </Route>
        <Route path="viento" element={<Viento />}>
          <Route path=":cat" element={<Viento />} />
        </Route>
      </Route>
    </>
  )
);
