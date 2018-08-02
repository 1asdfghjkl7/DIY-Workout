import React, { Component } from "react";
import { Button, Checkbox, Form, Modal } from "semantic-ui-react";
import API from "../../APIManager/APIManager";

//pull type down from db match to each exercise and create checkboxes with labels for each reprange
// if exercise is selected pop up another modal that has exercise.name as modal header and has checkboxes
// corresponding to rep range and button to submit exercise to modifiedExercise part of workout in database

export default class ExerciseForm extends Component {
    state = {
        exercises: [],
        exerciseInsideModalOpen: false,
        typeOfExercise: []
    };

    componentDidMount() {
        API.ForExerciseForm().then(response => {
            this.setState({ exercises: response });
        });
    }

    postModifiedExercise = () => {};

    handleExerciseInsideOpen = () =>
        this.setState({ exerciseInsideModalOpen: true });
    handleExerciseInsideClose = () =>
        this.setState({ exerciseInsideModalOpen: false });

    render() {
        const InsideModal = () =>
            this.state.exercises.map(exercise => (
                <Modal
                    open={this.state.exerciseInsideModalOpen}
                    onOpen={this.handleExerciseInsideOpen}
                    onClose={this.handleExerciseInsideClose}
                    trigger={<h3>{exercise.name}</h3>}
                >
                    <Modal.Header>Idk yet</Modal.Header>
                    <Modal.Content>
                        <Form.Field>
                            <Checkbox
                                // id={1}
                                label="grab rep number"
                                // onChange={this.props.arrayStuff}
                            />
                        </Form.Field>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.handleExerciseInsideClose}>
                            Save Exercise
                        </Button>
                    </Modal.Actions>
                </Modal>
            ));
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
                            <Form>
                                <InsideModal />

                                <Button
                                    onClick={this.props.handleExerciseClose}
                                >
                                    Close
                                </Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </React.Fragment>
        );
    }
}
