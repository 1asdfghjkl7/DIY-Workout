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
                programId: programId,
                modifiedExercises: []
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
        return fetch("http://localhost:5002/typeOfExercise/").then(e =>
            e.json()
        );
    }

    ForExerciseForm() {
        return fetch(
            "http://localhost:5002/exercises?_expand=typeOfExercise"
        ).then(e => e.json());
    }

    //useExerciseWorkoutCross not ModifiedExercise. nested json doesnt work.
    POSTModifiedExercise(exId, wrkId, rep) {
        return fetch("http://localhost:5002/exerciseWorkoutCross", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                exId: exId,
                wrkId: wrkId,
                rep: rep
            })
        }).then(e => e.json());
    }
}

const API = new APIManager();
export default API;
