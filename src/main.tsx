import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './View/Layout/Layout';
import Home, { loader as HomeLoader } from './View/Home/Home';
import ErrorPage from './View/Layout/error';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home message="Hello" title="there" />,
        loader: HomeLoader
      }
    ]
  }
]);

// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
