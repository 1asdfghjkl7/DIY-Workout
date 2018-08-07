import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import RepRange from "./RepRange";

export default class JohnDoe extends Component {
    render() {
        return (
            <Modal
                key={this.props.exercise.id}
                open={this.props.exerciseInsideModalOpen}
                onOpen={this.props.handleExerciseInsideOpen}
                onClose={this.props.handleExerciseInsideClose}
                trigger={
                    <h3 id={this.props.exercise.id}>
                        {this.props.exercise.name}
                    </h3>
                }
            >
                <Modal.Header>Idk yet</Modal.Header>
                <Modal.Content>
                    <RepRange
                        currentRadio={this.props.currentRadio}
                        handleRadioChange={this.props.handleRadioChange}
                        exercise={this.props.exercise}
                        typeOfExercise={this.props.typeOfExercise}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.postModifiedExercise}>
                        Save Exercise
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}
