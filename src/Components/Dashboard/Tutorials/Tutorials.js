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
                            <Button>chest</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Quads"
                            }}
                        >
                            <Button>quads</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Hamstrings"
                            }}
                        >
                            <Button>hamstrings</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Triceps"
                            }}
                        >
                            <Button>triceps</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Biceps"
                            }}
                        >
                            <Button>biceps</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Back"
                            }}
                        >
                            <Button>back</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Shoulders"
                            }}
                        >
                            <Button>shoulders</Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "Tutorials/Abs"
                            }}
                        >
                            <Button>abs</Button>
                        </Link>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}
