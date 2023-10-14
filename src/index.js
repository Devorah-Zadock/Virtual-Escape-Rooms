import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Gaza from './components/Gaza';
import GHome from './components/GHome';

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
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);