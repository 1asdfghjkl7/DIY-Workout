import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

export default class ExerciseInsideForm extends Component {
    // saveModifiedExercise = () => {
    //     API.POSTModifiedExercise(exercise.id);
    // };

    render() {
        return this.props.exercises.map(exercise => (
            <Modal
                key={exercise.id}
                open={this.props.exerciseInsideModalOpen}
                onOpen={this.props.handleExerciseInsideOpen}
                onClose={this.props.handleExerciseInsideClose}
                trigger={<h3>{exercise.name}</h3>}
            >
                <Modal.Header>Idk yet</Modal.Header>
                <Modal.Content>
                    {exercise.typeOfExercise.repRange.map(
                        rep => (
                            <div key={rep}>
                                {/* {console.log(rep)}
                                {console.log(this.props.currentRadio)} */}
                                {/* {console.log(this.props.workoutId)} */}
                                {/* {console.log(exercise.id)} */}
                                <input
                                    type="radio"
                                    id={rep}
                                    value={rep}
                                    checked={this.props.currentRadio == rep}
                                    onChange={this.props.handleRadioChange}
                                    // onChange={this.props.arrayStuff}
                                />
                                <label htmlFor={rep}>{rep}</label>
                            </div>
                        )
                        // console.log(rep)
                    )}
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        onClick={() => {
                            console.log(exercise.id);
                        }}
                    >
                        Save Exercise
                    </Button>
                </Modal.Actions>
            </Modal>
        ));
    }
}
