import { useState, useEffect } from "react";

import Workout from "./workout";

export default function WorkoutList() {
    const [workoutList, setWorkoutList] = useState([]);

    useEffect(() => {
        const apiEndpoint = "http://localhost:9000/workouts";
        fetch(apiEndpoint)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            else {
                throw Error("Server error");
            }
        })
        .then(data => {
            setWorkoutList(data.workouts);
        })
        .catch(err => {
            console.log("Error fetching data:", err);
        })
    }, []);

    return (
        <>
            <ul>
                {workoutList.map((workout, index) => (
                    <Workout key = {index} workout = {workout} />
                ))}
            </ul>
        </>
    )
};