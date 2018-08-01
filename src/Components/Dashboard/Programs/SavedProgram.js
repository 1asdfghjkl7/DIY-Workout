import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../APIManager/APIManager";
import "./SavedProgram.css";
import WorkoutForm from "./WorkoutForm";
import Workout from "./Workout";

export default class SavedProgram extends Component {
    state = {
        days: [],
        modalOpen: false,
        workouts: [],
        idOfProgram: this.props.location.pathname.slice(34)
    };
    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false });
    arrayStuff = event => {
        let array = [...this.state.days];
        const value = event.target.id;
        const index = array.findIndex(day => day === value);
        // console.log(value);
        if (index > -1) {
            array = [...array.slice(0, index), ...array.slice(index + 1)];
        } else {
            array.push(value);
        }
        this.setState({ days: array });
        // console.log(array);
    };

    postWorkout = () => {
        const name = document.querySelector("#name").value;
        const days = this.state.days;
        API.POSTWorkout(name, days, this.state.idOfProgram);
        this.handleClose();
    };

    componentDidMount() {
        API.GETWorkout().then(response => {
            this.setState({
                workouts: response
            });
        });
    }
    render() {
        const location = this.props.location;
        let url = location.pathname;
        console.log(location.pathname);
        const program = this.props.program;

        if (url === `/Dashboard/Programs/SavedPrograms/${program.id}`) {
            return (
                <React.Fragment>
                    <Link
                        key={program.id}
                        to={{
                            pathname: `/Dashboard/Programs/SavedPrograms/${
                                program.id
                            }`,
                            state: { program: program }
                        }}
                    >
                        <h1>{program.name}</h1>
                    </Link>
                    {this.state.workouts.map(workout => (
                        <Link
                            key={workout.id}
                            to={{
                                pathname: `${url}/${workout.id}`,
                                state: {
                                    program: this.props.program,
                                    workout: workout
                                }
                            }}
                        >
                            <Workout
                                key={workout.id}
                                workout={workout}
                                idOfProgram={this.state.idOfProgram}
                                url={url}
                                program={program}
                            />
                        </Link>
                    ))}
                    {/* <Link
                        to={{
                            pathname: `${url}/${pulledWorkouts.id}`
                        }}
                    >
                        <div />
                    </Link> */}
                    <WorkoutForm
                        days={this.state.days}
                        arrayStuff={this.arrayStuff}
                        postWorkout={this.postWorkout}
                        modalOpen={this.state.modalOpen}
                        handleOpen={this.handleOpen}
                        handleClose={this.handleClose}
                    />
                </React.Fragment>
            );
        } else {
            return (
                <Link
                    to={{
                        pathname: `/Dashboard/Programs/SavedPrograms/${
                            program.id
                        }`,
                        state: { program: program }
                    }}
                >
                    <div>
                        <h1 key={program.id}>{program.name}</h1>
                    </div>
                </Link>
            );
        }
    }
}
