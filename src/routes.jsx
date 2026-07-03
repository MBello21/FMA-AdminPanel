import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
} from 'react-router';
import { Layout } from './pages/Layout';
import { Signin } from './pages/Signin';
import Temperatura from './features/weather/Temperatura';
import Viento from './features/weather/Viento';
import Precipitacion from './features/weather/Precipitacion';
import { Freak } from './features/freak/Freak'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Signin />} errorElement={<h1>Not Found!</h1>} />
            <Route path="/home" element={<Layout />}>
                <Route index element={<Navigate to="temperatura" />} />
                <Route path="temperatura" element={<Temperatura />} />
                <Route path="temperatura/:cat" element={<Freak />} />
                <Route index element={<Navigate to="viento" />} />
                <Route path="viento" element={<Viento />} />
                <Route path="viento/:cat" element={<Freak />} />
                <Route index element={<Navigate to="precipitacion" />} />
                <Route path="precipitacion" element={<Precipitacion />} />
                <Route path="precipitacion/:cat" element={<Freak />} />
            </Route>
        </>
    )
);
