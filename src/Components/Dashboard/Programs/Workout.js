import React, { Component } from "react";
import API from "../../APIManager/APIManager";

export default class Workout extends Component {
    state = {
        exerciseWorkoutCross: [],
        exercises: []
    };

    componentDidMount() {
        API.GETExercises().then(response =>
            this.setState({ exercises: response })
        );
        API.GETExerciseWorkoutCross().then(response =>
            this.setState({ exerciseWorkoutCross: response })
        );
    }

    render() {
        return this.state.exerciseWorkoutCross.map(
            cross =>
                this.props.workout.id === cross.wrkId ? (
                    <div key={cross.exercise.id}>
                        <h3>{cross.exercise.name}</h3>
                        <h3>{cross.rep}</h3>
                    </div>
                ) : null
        );
    }
}
