import React, {useState} from "react";
import "./workout-form.css";

export default function WorkoutForm() {

    let workouts = [
        "shoulder press",
        "bench press",
        "bicep curl",
    ]

    const currDate = new Date();
    const formattedDate = currDate.toISOString().split('T')[0];

    const initialFormData = {
        workoutName: "",
        workoutDate: formattedDate,
        workoutType: "push",
        workoutWeightQuantity: "",
        workoutWeightUnit: "kg",
        workoutSets: "",
        workoutReps: "",
    }

    const [formData, setFormData] = useState(initialFormData);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        handleChange(e);
        const input = e.target.value;
        const search = input.trim().toLowerCase();
        const res = workouts.filter(workout => workout.startsWith(search));
        setSearchResults(res);
    }

    const handleSearchSelection = (e, result) => {
        let name = "workoutName";
        handleSetFormData(name, result);
        setSearchResults([]);
      };

    const resetForm = () => {
        setFormData(initialFormData);
        setSearchResults([]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        resetForm();
        console.log(formData);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        handleSetFormData(name, value);
    }

    const handleSetFormData = (name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }
    
    return (
    <div className = "container-fluid">
        <h3 className = "form-title">Add Workout</h3>
        <form id = "workout-form" method="post" onSubmit={handleSubmit}>
                <div className = "search-container form-group col-md-5">
                    <label className="label" htmlFor = "workoutName">Workout Name</label>
                    <input id = "workout-name" className = "form-control" name = "workoutName" value = {formData.workoutName} placeholder="shoulder press" type = "text" onChange={handleSearchChange} onBlur={() => setSearchResults([])} />
                    {searchResults.length > 0 && (
                    <ul className="search-results">
                        {searchResults.map((result, index) => (
                            <li className = "clicked" key={index} onMouseDown={(e) => handleSearchSelection(e, result)}>
                            {result}
                            </li>
                        ))}
                    </ul>
                    )}
                </div>
                <div className="form-group col-md-3">
                    <label className="label" htmlFor="workoutDate">Date</label>
                    <input id = "workout-date" className="form-control" type = "date" name = "workoutDate" value = {formData.workoutDate} onChange={handleChange} max={formattedDate} />
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
                <div className="row">
                    <div className="form-group col-md-3">
                        <label className="label" htmlFor="workoutWeightQuantity">Weight</label>
                        <input id = "weight" className="form-control" name = "workoutWeightQuantity" type = "number" value = {formData.workoutWeightQuantity} placeholder="0" onChange={handleChange} min="0" />
                    </div>
                    <div className="form-group col-md-2">
                        <label className="label" htmlFor="workoutWeightUnit">Unit</label>
                        <select id="inputState" name = "workoutWeightUnit" className="form-control" value={formData.workoutWeightUnit} onChange={handleChange}>
                            <option>Kg</option>
                            <option>lbs</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label className="label" htmlFor = "workoutSets">Sets</label>
                        <input id = 'workout-sets' className="form-control" name = "workoutSets" type="number" value = {formData.workoutSets} placeholder="0" onChange={handleChange} min="0"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label className="label" htmlFor = "workoutReps">Reps</label>
                        <input id = 'workout-reps' className="form-control" name = "workoutReps" value = {formData.workoutReps} onChange={handleChange} placeholder="0" type="number" min="0"/>
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type = "button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
                </div>
                
        </form>
    </div>
    )
}