import React, { Component } from "react";

export default class Workout extends Component {
    render() {
        console.log(this.props.program);
        console.log(this.props.workout);
        console.log(this.props.program.workoutId);
        console.log(this.props.idOfProgram);
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
                        <h3>{this.props.workout.name}</h3>
                    </div>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}
