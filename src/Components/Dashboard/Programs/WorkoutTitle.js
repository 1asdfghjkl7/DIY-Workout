import React, { Component } from "react";
import Workout from "./Workout";
import { Link } from "react-router-dom";
import ExerciseForm from "./ExerciseForm";
import API from "../../APIManager/APIManager";
import ExerciseFormPage from "./ExerciseFormPage";
import { Button } from "semantic-ui-react";

export default class WorkoutTitle extends Component {
    state = {
        isDetails: false,
        exerciseModalOpen: false
    };

    handleDetails = () => {
        this.setState(prevState => ({
            isDetails: !prevState.isDetails
        }));
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
                        <h3 onClick={this.handleDetails}>
                            {this.props.workout.name}
                        </h3>
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
