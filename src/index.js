import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
// import AboutPage from './components/AboutPage/AboutPage';
// import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import reportWebVitals from './reportWebVitals';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  // {
  //   path: '/about',
  //   element: <AboutPage />,
  // },
  // {
  //   path: '/projects',
  //   element: <ProjectsPage />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>,
);
reportWebVitals();
