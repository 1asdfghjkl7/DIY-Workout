class APIManager {
    POSTProgram(name, userId) {
        return fetch("https://diyworkout-json-server.herokuapp.com/programs/", {
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
        return fetch(
            "https://diyworkout-json-server.herokuapp.com/programs/"
        ).then(e => e.json());
    }

    POSTWorkout(name, programId) {
        return fetch("https://diyworkout-json-server.herokuapp.com/workouts/", {
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
        return fetch(
            "https://diyworkout-json-server.herokuapp.com/workouts/"
        ).then(e => e.json());
    }

    GETExercises() {
        return fetch(
            "https://diyworkout-json-server.herokuapp.com/exercises/"
        ).then(e => e.json());
    }

    GETTypeOfExercise() {
        return fetch(
            "https://diyworkout-json-server.herokuapp.com/typeOfExercises/"
        ).then(e => e.json());
    }

    GETUsers() {
        return fetch("https://diyworkout-json-server.herokuapp.com/users").then(
            e => e.json()
        );
    }

    //useExerciseWorkoutCross not ModifiedExercise. nested json doesnt work.
    POSTModifiedExercise(exId, wrkId, rep) {
        // fetch("https://diyworkout-json-server.herokuapp.com/exerciseWorkoutCross/")
        // if (Response.length === 0) {

        // }
        return fetch(
            "https://diyworkout-json-server.herokuapp.com/exerciseWorkoutCross/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    exerciseId: exId,
                    wrkId: wrkId,
                    rep: rep
                })
            }
        );
    }

    GETUserProgramCross() {
        return fetch(
            "https://diyworkout-json-server.herokuapp.com/userProgramCross"
        ).then(e => e.json());
    }

    GETExerciseWorkoutCross() {
        return fetch(
            "https://diyworkout-json-server.herokuapp.com/exerciseWorkoutCross?_expand=exercise"
        ).then(e => e.json());
    }

    DELETEProgram(id) {
        return fetch(
            `https://diyworkout-json-server.herokuapp.com/programs/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }

    DELETEExercise(id) {
        return fetch(
            `https://diyworkout-json-server.herokuapp.com/exerciseWorkoutCross/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }

    DELETEWorkout(id) {
        return fetch(
            `https://diyworkout-json-server.herokuapp.com/workouts/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }

    PATCHProgramName(id, value) {
        return fetch(
            `https://diyworkout-json-server.herokuapp.com/programs/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: value })
            }
        );
    }

    PATCHWorkoutName(id, value) {
        return fetch(
            `https://diyworkout-json-server.herokuapp.com/workouts/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: value })
            }
        );
    }
}

const API = new APIManager();
export default API;
