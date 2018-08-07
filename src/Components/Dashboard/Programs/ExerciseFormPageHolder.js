import React, { Component } from "react";
import ExerciseFormPage from "./ExerciseFormPage";
export default class ExerciseFormPageHolder extends Component {
    state = { reps: "" };
    handleSelectChange = (event, { value }) => {
        console.log(event.currentTarget.id);
        this.setState({
            [event.currentTarget.id]: value
        });
    };
    render() {
        const { reps } = this.state;

        return (
            <ExerciseFormPage
                reps={reps}
                handleSelectChange={this.handleSelectChange}
                workoutId={this.props.location.state}
            />
        );
    }
}
