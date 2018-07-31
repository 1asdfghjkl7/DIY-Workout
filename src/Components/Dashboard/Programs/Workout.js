import React, { Component } from "react";

export default class Workout extends Component {
    render() {
        if (
            this.props.url ===
            `/Dashboard/Programs/SavedPrograms/${this.props.program.id}`
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
