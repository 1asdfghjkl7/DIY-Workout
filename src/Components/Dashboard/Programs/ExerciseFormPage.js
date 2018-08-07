import React, { Component } from "react";
import API from "../../APIManager/APIManager";
import { Select, Button } from "semantic-ui-react";

export default class ExerciseFormPage extends Component {
    state = {
        exercises: [],
        exerciseInsideModalOpen: false,
        currentRadio: "",
        currentEx: "",
        typeOfExercise: []
    };

    componentDidMount() {
        API.GETExercises().then(response => {
            this.setState({ exercises: response });
        });
        API.GETTypeOfExercise().then(response => {
            this.setState({ typeOfExercise: response });
        });
    }

    submitExercise = event => {
        // console.log(event.target.id);
        // console.log(this.props.workoutId);
        // console.log(this.props.reps);

        API.POSTModifiedExercise(
            event.target.id,
            this.props.workoutId,
            this.props.reps
        );
    };

    render() {
        const numOfReps = [
            { key: "4", id: "reps", text: "4", value: "4" },
            { key: "5", id: "reps", text: "5", value: "5" },
            { key: "6", id: "reps", text: "6", value: "6" }
        ];
        const numOfRepsTwo = [
            { key: "8", id: "reps", text: "8", value: "8" },
            { key: "9", id: "reps", text: "9", value: "9" },
            { key: "10", id: "reps", text: "10", value: "10" },
            { key: "11", id: "reps", text: "11", value: "11" },
            { key: "12", id: "reps", text: "12", value: "12" }
        ];
        const numOfRepsThree = [
            { key: "2", id: "reps", text: "2", value: "2" },
            { key: "3", id: "reps", text: "3", value: "3" },
            { key: "4", id: "reps", text: "4", value: "4" }
        ];
        const numOfRepsFour = [
            { key: "12", id: "reps", text: "12", value: "12" },
            { key: "13", id: "reps", text: "13", value: "13" },
            { key: "14", id: "reps", text: "14", value: "14" },
            { key: "15", id: "reps", text: "15", value: "15" },
            { key: "16", id: "reps", text: "16", value: "16" },
            { key: "17", id: "reps", text: "17", value: "17" },
            { key: "18", id: "reps", text: "18", value: "18" },
            { key: "19", id: "reps", text: "19", value: "19" },
            { key: "20", id: "reps", text: "20", value: "20" }
        ];
        return this.state.exercises.map(exercise => (
            <React.Fragment key={exercise.id}>
                <h3 id={exercise.id}>{exercise.name}</h3>
                {exercise.typeOfExerciseId === 1 ? (
                    <div>
                        <Select
                            id={"reps"}
                            value={this.props.numOfReps}
                            placeholder={"Choose Reps"}
                            onChange={this.props.handleSelectChange}
                            options={numOfReps}
                        />
                    </div>
                ) : null}
                {exercise.typeOfExerciseId === 2 ? (
                    <div key={exercise.id}>
                        <Select
                            id={"reps"}
                            value={this.props.numOfRepsTwo}
                            placeholder={"Choose Reps"}
                            onChange={this.props.handleSelectChange}
                            options={numOfRepsTwo}
                        />
                    </div>
                ) : null}
                {exercise.typeOfExerciseId === 3 ? (
                    <div key={exercise.id}>
                        <Select
                            id={"reps"}
                            value={this.props.numOfRepsThree}
                            placeholder={"Choose Reps"}
                            onChange={this.props.handleSelectChange}
                            options={numOfRepsThree}
                        />
                    </div>
                ) : null}
                {exercise.typeOfExerciseId === 4 ? (
                    <div key={exercise.id}>
                        <Select
                            id={"reps"}
                            value={this.props.numOfRepsFour}
                            placeholder={"Choose Reps"}
                            onChange={this.props.handleSelectChange}
                            options={numOfRepsFour}
                        />
                    </div>
                ) : null}
                <Button id={exercise.id} onClick={this.submitExercise}>
                    Save
                </Button>
            </React.Fragment>
        ));
    }
}
