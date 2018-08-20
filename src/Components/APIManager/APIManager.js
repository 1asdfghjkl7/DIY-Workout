class APIManager {
    POSTProgram(name, userId) {
        return fetch("http://localhost:5002/programs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                userId: userId
            })
        }).then(e => e.json());
    }

    GETPrograms() {
        return fetch("http://localhost:5002/programs/").then(e => e.json());
    }

    POSTWorkout(name, programId) {
        return fetch("http://localhost:5002/workouts/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                programId: programId
            })
        }).then(e => e.json());
    }

    GETWorkout() {
        return fetch("http://localhost:5002/workouts/").then(e => e.json());
    }

    GETExercises() {
        return fetch("http://localhost:5002/exercises/").then(e => e.json());
    }

    GETTypeOfExercise() {
        return fetch("http://localhost:5002/typeOfExercises/").then(e =>
            e.json()
        );
    }

    GETUsers() {
        return fetch("http://localhost:5002/users").then(e => e.json());
    }

    //useExerciseWorkoutCross not ModifiedExercise. nested json doesnt work.
    POSTModifiedExercise(exId, wrkId, rep) {
        return fetch("http://localhost:5002/exerciseWorkoutCross/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                exerciseId: exId,
                wrkId: wrkId,
                rep: rep
            })
        });
    }

    GETUserProgramCross() {
        return fetch("http://localhost:5002/userProgramCross").then(e =>
            e.json()
        );
    }

    GETExerciseWorkoutCross() {
        return fetch(
            "http://localhost:5002/exerciseWorkoutCross?_expand=exercise"
        ).then(e => e.json());
    }

    DELETEProgram(id) {
        return fetch(`http://localhost:5002/programs/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    DELETEExercise(id) {
        return fetch(`http://localhost:5002/exerciseWorkoutCross/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    DELETEWorkout(id) {
        return fetch(`http://localhost:5002/workouts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    PATCHProgramName(id, value) {
        return fetch(`http://localhost:5002/programs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: value })
        });
    }

    PATCHWorkoutName(id, value) {
        return fetch(`http://localhost:5002/workouts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: value })
        });
    }
}

const API = new APIManager();
export default API;
