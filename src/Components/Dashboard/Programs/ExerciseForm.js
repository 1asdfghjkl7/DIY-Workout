import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import API from "../../APIManager/APIManager";
import ExerciseInsideForm from "./ExerciseInsideForm";

//pull type down from db match to each exercise and create checkboxes with labels for each reprange
// if exercise is selected pop up another modal that has exercise.name as modal header and has checkboxes
// corresponding to rep range and button to submit exercise to modifiedExercise part of workout in database

export default class ExerciseForm extends Component {
    state = {
        exercises: [],
        exerciseInsideModalOpen: false,
        currentRadio: "",
        currentEx: "",
        typeOfExercise: []
    };

    componentDidMount() {
        API.GETExercises().then(response => {
            this.setState({ exercises: response });
        });
        API.GETTypeOfExercise().then(response => {
            this.setState({ typeOfExercise: response });
        });
    }

    handleRadioChange = event => {
        this.setState({
            currentRadio: event.target.value
        });
    };

    handleExerciseInsideOpen = event => {
        this.setState({
            exerciseInsideModalOpen: true,
            currentEx: event.target.id
        });
    };
    handleExerciseInsideClose = () =>
        this.setState({ exerciseInsideModalOpen: false });

    render() {
        return (
            <React.Fragment>
                <Modal
                    trigger={
                        <Button onClick={this.props.handleExerciseOpen}>
                            Add Exercise
                        </Button>
                    }
                    open={this.props.exerciseModalOpen}
                    onClose={this.props.handleExerciseClose}
                >
                    <Modal.Header>Exercise Form</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            {/* <InsideModal /> */}

                            <ExerciseInsideForm
                                exercises={this.state.exercises}
                                exerciseInsideModalOpen={
                                    this.state.exerciseInsideModalOpen
                                }
                                handleExerciseInsideOpen={
                                    this.handleExerciseInsideOpen
                                }
                                handleExerciseInsideClose={
                                    this.handleExerciseInsideClose
                                }
                                handleRadioChange={this.handleRadioChange}
                                currentRadio={this.state.currentRadio}
                                workoutId={this.props.workoutId}
                                currentEx={this.state.currentEx}
                                typeOfExercise={this.state.typeOfExercise}
                            />

                            <Button onClick={this.props.handleExerciseClose}>
                                Close
                            </Button>
                            {/* </Form> */}
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </React.Fragment>
        );
    }
}
