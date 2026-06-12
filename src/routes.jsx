import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { Layout } from "./pages/Layout";
import Home  from "./pages/Home/Home";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>} errorElement={<h1>Not Found!</h1>}>
            <Route path="/" element={<Home/>}/>
        </Route>
    )
)