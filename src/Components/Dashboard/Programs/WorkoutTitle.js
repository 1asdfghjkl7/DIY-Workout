import React, { Component } from "react";
import Workout from "./Workout";

export default class WorkoutTitle extends Component {
    state = {
        isDetails: false
    };

    handleDetails = () => {
        this.setState(prevState => ({
            isDetails: !prevState.isDetails
        }));
    };

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
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}
