import WorkoutForm from "./components/workoutForm";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
  
const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);

export default function App() {
    return <WorkoutForm />
}