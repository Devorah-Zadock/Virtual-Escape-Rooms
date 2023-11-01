import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home'
import Gaza from './Gaza/Gaza';
import GHome from './Gaza/GHome';
import Egypt from './Gaza/Egypt';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/Gaza",
    element: <Gaza/>
  },
  {
    path:"/GHome",
    element: <GHome/>
  },
  {
    path:"/Egypt",
    element: <Egypt/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);