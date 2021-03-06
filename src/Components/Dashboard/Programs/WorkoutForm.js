import React, { Component } from "react";
import { Button, Form, Modal } from "semantic-ui-react";

export default class WorkoutForm extends Component {
    render() {
        const workoutInputStyle = {
            margin: "0"
        };
        return (
            <Modal
                size="mini"
                trigger={
                    <Button color="orange" onClick={this.props.handleOpen}>
                        Add Workout
                    </Button>
                }
                open={this.props.modalOpen}
                onClose={this.props.handleClose}
            >
                <Modal.Header>Workout Form</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <label htmlFor="name">Workout Name</label>
                                <input
                                    style={workoutInputStyle}
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                            </Form.Field>
                            <Button onClick={this.props.postWorkout}>
                                Save Workout
                            </Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}
