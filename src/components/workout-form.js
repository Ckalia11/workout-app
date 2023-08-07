import React from "react";
import "./workout-form.css";

export default function WorkoutForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }
    
    return (
    <div className = "container-fluid">
        <h3 className = "form-title">Add Workout</h3>
        <form method="post" onSubmit={handleSubmit}>
                <div className = "form-group">
                    <label className="label" htmlFor = "workout-name">Workout Name</label>
                    <input id = "workout-name" className = "form-control" name = "workout-name" type = "text" defaultValue="Enter Name" />
                </div>
                <div className="workout-type">
                    <p className="label">Workout Type</p>
                    <div className="form-check form-check-inline">
                        <input  id = 'push' className="form-check-input" type="radio" name="workout-type" value = "push" defaultChecked = {true} />
                        <label className="form-check-label" htmlFor="push">
                            Push Exercise
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input id = 'pull' className="form-check-input" type="radio" name="workout-type" value = "pull" />
                        <label className="form-check-label" htmlFor="pull">
                            Pull Exercise
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor = "workout-sets">Sets</label>
                    <input id = 'workout-sets' className="form-control" name = "workout-sets" type="number" defaultValue="0" min="0"/>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor = "workout-reps">Reps</label>
                    <input id = 'workout-reps' className="form-control" name = "workout-reps" type="number" defaultValue="0" min="0"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}