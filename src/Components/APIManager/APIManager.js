class APIManager {
    POSTProgram(name) {
        return fetch("http://localhost:5002/programs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        }).then(e => e.json());
    }

    GETPrograms() {
        return fetch("http://localhost:5002/programs/").then(e => e.json());
    }

    POSTWorkout(name, days) {
        return fetch("http://localhost:5002/workouts/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                daysId: days
            })
        }).then(e => e.json());
    }
}

const API = new APIManager();
export default API;
