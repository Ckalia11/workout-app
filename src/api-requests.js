const createWorkout = async (formData, tagsList) => {
    const apiEndpoint = "http://localhost:9000/workouts";
    try {
        const body = JSON.stringify({
            ...formData,
            workoutTagsList: tagsList
        })
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body,
        });
    
        if (response.ok) {
            const body = await response.json();
            console.log("body", body);
        }
    }
    catch (err) {
        console.log(err);
    }
}

export default createWorkout;

