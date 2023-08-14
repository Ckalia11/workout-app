import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorPage from './components/errorPage';
import WorkoutList from './components/workoutList';
import Home from './components/home';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: < Home />,
      errorElement: <ErrorPage />,
    },
    {
        path: "/add-workout",
        element: < App />,
    },
    {
      path: "/workouts",
      element: <WorkoutList />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);