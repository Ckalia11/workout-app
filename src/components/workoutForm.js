import React, {useState, useEffect} from "react";
import "./workoutForm.css";
// data
import workoutData from "../workouts/workouts.json";
import workoutTagsData from "../workouts/workoutTags.json";
// components
import SearchField from "./searchField";
import Tags from "./tags";
// API helpers
import createWorkout from "../api-requests.js";

export default function WorkoutForm() {

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
        workoutNote: "",
        workoutTag: "",
    }

    const [formData, setFormData] = useState(initialFormData);
    const [tagsList, setTagsList] = useState([]);

    const resetForm = () => {
        setFormData(initialFormData);
        setTagsList([]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        resetForm();
        createWorkout(formData, tagsList);
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

    const handleEnterKey = (e) => { 
        if (e.key === 'Enter') {
            e.preventDefault();
            if (e.target.name === "workoutTag") {
                handleEnterTag();
            }
        }  
    }

    const handleTagSelection = (_, value) => {
        handleNewTag(value);
    }

    const handleEnterTag = () => {
        const tag = formData.workoutTag.trim()
        handleNewTag(tag);
    }
    
    const handleNewTag = tag => {
        if (tag !== "" && !tagsList.includes(tag)) {
            setTagsList([...tagsList, tag]);
        }
        handleSetFormData("workoutTag", "");
    }

    const handleTagDelete = (tagtoDelete) => {
        const updatedTags = tagsList.filter(tag => tag !== tagtoDelete);
        setTagsList(updatedTags);
    }

    useEffect(() => {
        console.log(tagsList);
    }, [tagsList]);

    return (
    <div className = "container-fluid">
        <h3 className = "form-title">Add Workout</h3>
        <form id = "workout-form" method="post" onSubmit={handleSubmit} onKeyDown={handleEnterKey}>
                <SearchField 
                    label = "Workout Name"
                    id = "workout-name"
                    name = "workoutName"
                    width = "col-md-5"
                    placeholder = "Shoulder Press"
                    maxLength = "30"
                    searchableList = {workoutData.workouts}
                    search = {formData.workoutName}
                    handleSearchChange = {handleSetFormData}
                    handleSearchSelection = {handleSetFormData}
                />
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
                <div className="form-group col-md-5">
                    <label className = "label" htmlFor="workoutNote">Notes</label>
                    <textarea id = 'workout-note' className="form-control" name = "workoutNote" value = {formData.workoutNote} rows = "2" onChange={handleChange} placeholder="Add a note" />
                </div>
                <SearchField 
                    label = "Tags"
                    id = "workout-tags"
                    name = "workoutTag"
                    width = "col-md-3"
                    placeholder = "Add tags"
                    maxLength = "20"
                    searchableList = {workoutTagsData.workoutTags}
                    search = {formData.workoutTag}
                    handleSearchChange = {handleSetFormData}
                    handleSearchSelection = {handleTagSelection}
                />
                <Tags tags = {tagsList} handleTagDelete = {handleTagDelete} />
                <div className="button-container">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type = "button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
                </div>
                
        </form>
    </div>
    )
}