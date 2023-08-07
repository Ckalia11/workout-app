import React, {useState} from "react";
import "./workout-form.css";

export default function WorkoutForm() {

    const initialFormData = {
        workoutName: "",
        workoutType: "push",
        workoutSets: "",
        workoutReps: "",
    }

    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }) )
    }

    const resetForm = () => {
        setFormData(initialFormData);
    }
    
    return (
    <div className = "container-fluid">
        <h3 className = "form-title">Add Workout</h3>
        <form id = "workout-form" method="post" onSubmit={handleSubmit}>
                <div className = "form-group">
                    <label className="label" htmlFor = "workoutName">Workout Name</label>
                    <input id = "workout-name" className = "form-control" name = "workoutName" value = {formData.workoutName} placeholder="Shoulder Press" type = "text" onChange={handleChange} />
                </div>
                <div className="workout-type">
                    <p className="label">Workout Type</p>
                    <div className="form-check form-check-inline">
                        <input  id = 'push' className="form-check-input" type="radio" name="workoutType" value = "push" checked = {formData.workoutType === "push"} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="push">
                            Push Exercise
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input id = 'pull' className="form-check-input" type="radio" name="workoutType" value = "pull" checked = {formData.workoutType === "pull"} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="pull">
                            Pull Exercise
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor = "workoutSets">Sets</label>
                    <input id = 'workout-sets' className="form-control" name = "workoutSets" type="number" value = {formData.workoutSets} placeholder="0" onChange={handleChange} min="0"/>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor = "workoutReps">Reps</label>
                    <input id = 'workout-reps' className="form-control" name = "workoutReps" value = {formData.workoutReps} onChange={handleChange} placeholder="0" type="number" min="0"/>
                </div>
                <div className="button-container">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type = "button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
                </div>
                
        </form>
    </div>
    )
}