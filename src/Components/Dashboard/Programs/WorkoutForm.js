import React, { Component } from "react";
import { Button, Checkbox, Form, Modal } from "semantic-ui-react";

export default class WorkoutForm extends Component {
    render() {
        return (
            <Modal
                trigger={
                    <Button onClick={this.props.handleOpen}>Add Workout</Button>
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
                                <input type="text" name="name" id="name" />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    id={1}
                                    label="Sunday"
                                    onChange={this.props.arrayStuff}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    id={2}
                                    label="Monday"
                                    onChange={this.props.arrayStuff}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    id={3}
                                    label="Tuesday"
                                    onChange={this.props.arrayStuff}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    id={4}
                                    label="Wednesday"
                                    onChange={this.props.arrayStuff}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    id={5}
                                    label="Thursday"
                                    onChange={this.props.arrayStuff}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    id={6}
                                    label="Friday"
                                    onChange={this.props.arrayStuff}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    id={7}
                                    label="Saturday"
                                    onChange={this.props.arrayStuff}
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
