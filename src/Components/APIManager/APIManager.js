class APIManager {
    POSTProgram(name) {
        return fetch("http://localhost:5002/programs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                workoutId: []
            })
        }).then(e => e.json());
    }

    GETPrograms() {
        return fetch("http://localhost:5002/programs/").then(e => e.json());
    }

    POSTWorkout(name, days, programId) {
        return fetch("http://localhost:5002/workouts/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                daysId: days,
                programId: programId
            })
        }).then(e => e.json());
    }

    GETWorkout() {
        return fetch("http://localhost:5002/workouts/").then(e => e.json());
    }
}

const API = new APIManager();
export default API;
