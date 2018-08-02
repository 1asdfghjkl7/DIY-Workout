import React, { Component } from "react";
import Workout from "./Workout";
import ExerciseForm from "./ExerciseForm";

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
        const workoutId = this.props.program.workoutId;
        const idOfProgram = parseInt(this.props.idOfProgram, 8);
        if (
            workoutId.includes(idOfProgram)
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
                            <Workout
                                workout={this.props.workout}
                                idOfProgram={this.props.idOfProgram}
                                url={this.props.url}
                                program={this.props.program}
                            />
                        ) : null}
                    </div>
                    {this.state.isDetails ? (
                        <ExerciseForm
                            handleExerciseOpen={this.handleExerciseOpen}
                            handleExerciseClose={this.handleExerciseClose}
                            exerciseModalOpen={this.state.exerciseModalOpen}
                        />
                    ) : null}
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}
