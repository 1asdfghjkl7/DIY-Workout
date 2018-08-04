import React, { Component } from "react";

export default class Workout extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.workout.modifiedExercises.map(modEx => (
                    <div key={modEx.id}>
                        <h1>{modEx.name}</h1>
                        <h1>{modEx.reps}</h1>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}
