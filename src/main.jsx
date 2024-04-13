import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import GithubStats from "./components/GithubStats/GithubStats.jsx";
import Page404 from "./components/Page404/Page404.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>} />
            <Route path='about/' element={<About />} />
            <Route path='contact/' element={<Contact />} />
            <Route path='github_stats' element={<GithubStats/>}>
                <Route path=':github_username' element={<GithubStats/>}

                />
            </Route>
            <Route path='*' element={<Page404/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
