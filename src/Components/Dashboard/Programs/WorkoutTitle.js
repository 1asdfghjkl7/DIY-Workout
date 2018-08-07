import React, { Component } from "react";
import Workout from "./Workout";
import { Link } from "react-router-dom";
import API from "../../APIManager/APIManager";
import { Button, Input } from "semantic-ui-react";

export default class WorkoutTitle extends Component {
    state = {
        isDetails: false,
        exerciseModalOpen: false,
        input: this.props.workout.name,
        toggle: true
    };

    handleInput = event => {
        this.setState({ input: event.target.value });
    };

    changeToggle = () => {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
        console.log(this.state.toggle);
    };

    saveWorkoutName = () => {
        API.PATCHWorkoutName(this.props.workout.id, this.state.input).then(
            this.changeToggle
        );
    };

    handleDetails = () => {
        this.setState(prevState => ({
            isDetails: !prevState.isDetails
        }));
    };

    deleteWorkout = () => {
        API.DELETEWorkout(this.props.workout.id);
        // console.log(this.props.workout.id);
        window.location.reload();
    };

    handleExerciseOpen = () => this.setState({ exerciseModalOpen: true });
    handleExerciseClose = () => this.setState({ exerciseModalOpen: false });

    render() {
        const workoutId = this.props.workout.programId;
        const idOfProgram = parseInt(this.props.idOfProgram, 8);
        if (
            workoutId === idOfProgram
            // this.props.url ===
            // `/Dashboard/Programs/SavedPrograms/${this.props.program.id}`
        ) {
            return (
                <React.Fragment>
                    <div>
                        {this.state.toggle ? (
                            <div>
                                <h3 onClick={this.handleDetails}>
                                    {this.state.input}
                                </h3>
                                <Button
                                    onClick={this.changeToggle}
                                    color="yellow"
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={this.deleteWorkout}
                                    color="red"
                                >
                                    Delete
                                </Button>
                            </div>
                        ) : (
                            <div>
                                <Input
                                    value={this.state.input}
                                    onChange={this.handleInput}
                                />
                                <Button onClick={this.changeToggle}>
                                    Cancel
                                </Button>
                                <Button
                                    onClick={this.saveWorkoutName}
                                    color="green"
                                >
                                    Save
                                </Button>
                            </div>
                        )}
                        {this.state.isDetails ? (
                            <Workout workout={this.props.workout} />
                        ) : null}
                    </div>
                    {this.state.isDetails ? (
                        // <ExerciseForm
                        //     handleExerciseOpen={this.handleExerciseOpen}
                        //     handleExerciseClose={this.handleExerciseClose}
                        //     exerciseModalOpen={this.state.exerciseModalOpen}
                        //     workoutId={this.props.workout.id}
                        // />
                        <Link
                            to={{
                                pathname: "/AddExercise/",
                                state: this.props.workout.id
                            }}
                        >
                            <Button>add exercise</Button>
                        </Link>
                    ) : null}
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}
