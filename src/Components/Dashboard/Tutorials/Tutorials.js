import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Tutorials.css";
export default class Tutorials extends Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Chest"
                            }}
                        >
                            <Button color="orange">chest</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Quads"
                            }}
                        >
                            <Button color="orange">quads</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Hamstrings"
                            }}
                        >
                            <Button color="orange">hamstrings</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Triceps"
                            }}
                        >
                            <Button color="orange">triceps</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Biceps"
                            }}
                        >
                            <Button color="orange">biceps</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Back"
                            }}
                        >
                            <Button color="orange">back</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Shoulders"
                            }}
                        >
                            <Button color="orange">shoulders</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Abs"
                            }}
                        >
                            <Button color="orange">abs</Button>
                        </Link>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}
