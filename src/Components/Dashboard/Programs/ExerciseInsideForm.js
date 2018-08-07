import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import API from "../../APIManager/APIManager";
import RepRange from "./RepRange";
import JohnDoe from "./JohnDoe";

export default class ExerciseInsideForm extends Component {
    postModifiedExercise = event => {
        // API.POSTModifiedExercise();
        console.log(this.props.currentEx);
        console.log(this.props.workoutId);
        console.log(this.props.currentRadio);
    };

    //use event.target.parentNode.id or something
    render() {
        return this.props.exercises.map(exercise => (
            <JohnDoe
                exercise={exercise}
                exerciseInsideModalOpen={this.props.exerciseInsideModalOpen}
                handleExerciseInsideOpen={this.props.handleExerciseInsideOpen}
                handleExerciseInsideClose={this.props.handleExerciseInsideClose}
                handleRadioChange={this.props.handleRadioChange}
                currentRadio={this.props.currentRadio}
                workoutId={this.props.workoutId}
                currentEx={this.props.currentEx}
                typeOfExercise={this.props.typeOfExercise}
            />
        ));
    }
}
