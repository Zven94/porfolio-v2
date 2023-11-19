import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage/Homepage';
import reportWebVitals from './reportWebVitals';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>,
);
reportWebVitals();
